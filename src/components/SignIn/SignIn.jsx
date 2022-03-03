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
      <div className="w-full flex justify-center">
        <div className="rounded pl-12 pr-12 pt-16 pb-7 w-450  bg-white">
          <div>
            <span className="inline-block w-full text-center text-3xl font-medium text-slate-900 uppercase pb-14">
              {'Sign In Form'}
            </span>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-6 translate-x-[-40%] translate-y-[-10%] left-7 h-6 w-6 stroke-pink-600 stroke-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input
                className="h-16 w-full pl-16 bg-neutral-200 outline-transparent mb-4"
                placeholder="Email"
                onChange={this.onChangeEmail}
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="off"
              />
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-6 translate-x-[-40%] translate-y-[-10%] left-7 h-6 w-6 stroke-pink-600 stroke-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input
                className="h-16 w-full pl-16 bg-neutral-200 outline-transparent mb-4"
                onChange={this.onChangePassword}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col w-full">
            <input
              className="h-16 w-full bg-pink-600 uppercase text-slate-50 text-base font-medium cursor-pointer mb-20 hover:bg-pink-700"
              onClick={this.onClickSignin}
              type="submit"
              value="Sign in"
            />
            <div className="w-full text-center">
              <span className="text-base text-[#999]">Not a member? </span>
              <input
                className="text-base underline text-[#999] cursor-pointer hover:text-pink-600"
                onClick={() => onRouteChange('register')}
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
