import React, { Component } from 'react';

import './App.css';

import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import FaceDetection from './components/FaceDetection/FaceDetection';
import SignIn from './components/SignIn/SignIn';
import Registration from './components/Registration/Registration';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageURL: '',
      landmarksObj: {},
      box: {},
      isSignedIn: false,
      route: 'signin',
      user: {},
    };
  }

  loadUser = (user) => {
    this.setState({ user });
  };

  onClickBtn = async () => {
    if (this.state.input !== '') {
      this.setState({ imageURL: this.state.input });
      try {
        const response = await fetch(
          'https://smartbrain-api-diyor.herokuapp.com/image',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: this.state.input,
            }),
          }
        );

        const result = await response.text();
        const landmarksObj = JSON.parse(result).outputs[0].data;

        this.setState({ landmarksObj });
        if (typeof landmarksObj === 'object') {
          fetch('https://smartbrain-api-diyor.herokuapp.com/image', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: this.state.user.id }),
          })
            .then((response) => response.json())
            .then((rank) => {
              this.setState({ user: Object.assign(this.state.user, { rank }) });
            });
        }
      } catch (err) {
        console.log('error', err);
      }
    } else {
      this.setState({ landmarksObj: {}, imageURL: '', box: {} });
    }
  };

  onChangeInput = ({ target }) => {
    this.setState({ input: target.value });
  };

  onloadImg = ({ target }) => {
    this.setState({
      box: { width: target.offsetWidth, height: target.offsetHeight },
    });
  };

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({
        isSignedIn: true,
        landmarksObj: {},
        imageURL: '',
        box: {},
      });
    } else {
      this.setState({ isSignedIn: false, input: '', user: {} });
    }
    this.setState({ route });
  };

  render() {
    return (
      <div className="p-9 relative z-10 min-h-screen w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-hero-pattern before:bg-cover before:bg-center before:-z-10 before:block">
        <Nav
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {this.state.route === 'home' ? (
          <>
            <Logo />
            <Rank userName={this.state.user.name} rank={this.state.user.rank} />
            <ImageInputForm
              onClickBtn={this.onClickBtn}
              onChangeInput={this.onChangeInput}
            />
            <FaceDetection
              onloadImg={this.onloadImg}
              box={this.state.box}
              landmarksObj={this.state.landmarksObj}
              imageURL={this.state.imageURL}
            />
          </>
        ) : this.state.route === 'signin' ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Registration
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}
