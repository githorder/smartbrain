import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  onClickRegister = () => {
    const { email, password, name } = this.state;

    fetch('https://smartbrain-api-diyor.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.onRouteChange('home');
          this.props.loadUser(user);
        }
      })
      .catch((err) => console.log('error: ', err));
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <article className="br3 ba color-mine shadow-5 b--black-10 mv4 width-mine pv3 ph2 center">
        <main className="pa2 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw1 ph0 mh0 color-mine">
                {'Register'}
              </legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 color-mine" htmlFor="name">
                  {'Name'}
                </label>
                <input
                  className="pa1 input-reset bg-transparent w-100 color-mine outline-mine border-mine"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  onChange={this.onChangeName}
                />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 color-mine"
                  htmlFor="email-address"
                >
                  {'Email'}
                </label>
                <input
                  className="pa1 input-reset bg-transparent w-100 color-mine outline-mine border-mine"
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="off"
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="mv3">
                <label
                  className="db fw6 lh-copy f6 color-mine"
                  htmlFor="password"
                >
                  {'Password'}
                </label>
                <input
                  className="b pa1 input-reset border-mine outline-mine bg-transparent w-100 color-mine"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  onChange={this.onChangePassword}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onClickRegister}
                className="b ph3 pv2 color-mine input-reset border-mine bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Registration;
