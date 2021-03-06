import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signinEmail: '',
      signinPassword: '',
      hidden: true,
    };
  }

  onClickSignin = () => {
    const { signinEmail, signinPassword } = this.state;

    this.setState({ hidden: false });

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
          this.setState({ hidden: true });
          this.props.onRouteChange('home');
          this.props.loadUser(user);
        } else {
          this.setState({ hidden: true });
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
        <div className="rounded pl-12 pr-12 pt-16 pb-7 w-450 bg-white shadow-lg mb-72 lg:mb-96 xl:mb-0">
          <div>
            <span className="inline-block w-full text-center text-3xl font-medium text-slate-900 uppercase pb-14">
              {'Sign In'}
            </span>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-6 translate-x-[-40%] translate-y-[-10%] left-7 h-6 w-6 stroke-slate-900 stroke-1"
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
                className="h-16 w-full pl-16 bg-blue-50 outline-transparent mb-4 placeholder:lowercase focus:border-cyan-500 focus:border-2"
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
                className="absolute top-6 translate-x-[-40%] translate-y-[-10%] left-7 h-6 w-6 stroke-slate-900 stroke-1"
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
                className="h-16 w-full pl-16 bg-blue-50 outline-transparent mb-4 placeholder:lowercase focus:border-cyan-500 focus:border-2"
                onChange={this.onChangePassword}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col w-full">
            <div className={`${this.state.hidden ? 'hidden' : ''}`}>
              <div className="h-16 w-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mb-20 shadow-2xl flex items-center justify-center lg:hover:translate-y-1.5 ease-in duration-300">
                <span className="inline-block border-gray-300 border-4 w-10 border-t-4 border-t-cyan-500 h-10 rounded-full animate-spin"></span>
              </div>
            </div>
            <input
              className={`h-16 w-full bg-gradient-to-r from-cyan-500 to-blue-500 uppercase text-slate-50 text-base font-medium cursor-pointer mb-20 shadow-2xl lg:hover:translate-y-1.5 ease-in duration-300 ${
                this.state.hidden ? '' : 'hidden'
              }`}
              onClick={this.onClickSignin}
              type="submit"
              value="Sign in"
            />
            <div className="w-full text-center">
              <span className="text-base text-[#999]">Not a member? </span>
              <input
                className="text-base underline text-[#999] cursor-pointer lg:hover:text-cyan-500"
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
