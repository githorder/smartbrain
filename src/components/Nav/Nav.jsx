import React from 'react';

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="pb-20 lg:pb10 flex justify-end items-center lg:pb-10">
        <div className="bg-white divide-x rounded-md">
          <button
            onClick={() => onRouteChange('signin')}
            className="text-1xl text-slate-900 px-10 cursor-pointer py-2 rounded-full relative hover:text-cyan-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-1 absolute top-2 left-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            {'Sign Out'}
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="pb-20 lg:pb10 flex justify-end items-center lg:pb-10">
        <div className="divide-x shadow-lg bg-white rounded-md">
          <button
            onClick={() => onRouteChange('signin')}
            className="text-base text-slate-900 px-10 cursor-pointer py-2 relative hover:text-cyan-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute top-2 left-2 stroke-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            {'Sign In'}
          </button>

          <button
            onClick={() => onRouteChange('register')}
            className="text-slate-900 text-base px-10 cursor-pointer py-2 relative hover:text-cyan-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute top-2 left-2 stroke-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            {'Register'}
          </button>
        </div>
      </nav>
    );
  }
};

export default Nav;
