import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      hidden: true,
    };
  }

  onClickRegister = () => {
    const { email, password, name } = this.state;

    this.setState({ hidden: false });

    fetch('https://smartbrain-api-diyor.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.setState({ hidden: true });
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
      <div className="w-full flex justify-center">
        <div className="rounded pl-12 pr-12 pt-16 pb-7 w-450 bg-white shadow-lg mb-72 lg:mb-96 xl:mb-0">
          <div>
            <span className="inline-block w-full text-center text-3xl font-medium text-slate-900 uppercase pb-14">
              {'Register'}
            </span>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-6 translate-x-[-40%] translate-y-[-10%] left-7 stroke-slate-900 stroke-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <input
                className="h-16 w-full pl-16 bg-blue-50 outline-transparent mb-4 placeholder:lowercase focus:border-cyan-500 focus:border-2"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                onChange={this.onChangeName}
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input
                className="h-16 w-full pl-16 bg-blue-50 outline-transparent mb-4 placeholder:lowercase focus:border-cyan-500 focus:border-2"
                placeholder="Email"
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="off"
                onChange={this.onChangeEmail}
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
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={this.onChangePassword}
              />
            </div>
          </div>

          <div className="mt-5 w-full">
            <div className={`${this.state.hidden ? 'hidden' : ''}`}>
              <div className="h-16 w-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mb-20 shadow-2xl flex items-center justify-center lg:hover:translate-y-1.5 ease-in duration-300">
                <span className="inline-block border-gray-300 border-4 w-10 border-t-4 border-t-cyan-500 h-10 rounded-full animate-spin"></span>
              </div>
            </div>
            <input
              onClick={this.onClickRegister}
              className={`h-16 w-full bg-gradient-to-r from-cyan-500 to-blue-500 uppercase text-slate-50 text-base font-medium cursor-pointer shadow-2xl mb-5 hover:translate-y-1.5 ease-in duration-300 ${
                this.state.hidden ? '' : 'hidden'
              }`}
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
