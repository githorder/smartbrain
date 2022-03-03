import React from 'react';

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="mb-5 flex justify-end items-center">
        <div
          onClick={() => onRouteChange('signin')}
          className="px-9 cursor-pointer py-2 rounded-full bg-pink-600 mr-6 hover:bg-pink-700"
        >
          <button className="text-1xl text-gray-50">{'Sign Out'}</button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="mb-5 flex justify-end items-center">
        <div
          onClick={() => onRouteChange('signin')}
          className="px-9 cursor-pointer py-2 rounded-full bg-pink-600 mr-6 hover:bg-pink-700"
        >
          <button className="text-1xl text-gray-50">{'Sign In'}</button>
        </div>
        <div onClick={() => onRouteChange('register')} className="group">
          <button className="group-hover:text-gray-700 underline text-gray-50">
            {'Register'}
          </button>
        </div>
      </nav>
    );
  }
};

export default Nav;
