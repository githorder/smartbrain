import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signinEmail: '',
      signinPassword: '',
    };
  }

  onClickSignin = () => {
    const { signinEmail, signinPassword } = this.state;

    fetch('https://smartbrain-api-diyor.herokuapp.com/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signinEmail,
        password: signinPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.onRouteChange('home');
          this.props.loadUser(user);
        } else {
          console.log(user);
        }
      })
      .catch((err) => console.log('error: ', err));
  };

  onChangeEmail = (event) => {
    this.setState({ signinEmail: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ signinPassword: event.target.value });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="br3 ba color-mine shadow-5 b--black-10 mv4 width-mine pv3 ph2 center">
        <main className="pa2 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw1 ph0 mh0 color-mine">{'Sign In'}</legend>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 color-mine"
                  htmlFor="email-address"
                >
                  {'Email'}
                </label>
                <input
                  onChange={this.onChangeEmail}
                  className="pa1 input-reset bg-transparent w-100 color-mine outline-mine border-mine"
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="off"
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
                  onChange={this.onChangePassword}
                  className="b pa1 input-reset border-mine outline-mine bg-transparent w-100 color-mine"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onClickSignin}
                className="b ph3 pv2 color-mine input-reset border-mine bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <input
                onClick={() => onRouteChange('register')}
                type="submit"
                value="Register"
                className="f6 dib pointer bg-transparent no-border input-reset pv2 ph3 b link dim db color-mine"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
