import React from 'react';

import signOutGif from './signOut.gif';

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end pa4">
        <div
          onClick={() => onRouteChange('signin')}
          className="pl3 pr3 bg-mine-new br3 pointer inline-flex justify-center items-center dim"
        >
          <img className="w2 pa2" src={signOutGif} alt="signoutGif" />
          <button className="pointer pa0 bg-transparent ttc fw4 no-border">
            {'Sign Out'}
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-end pa4">
        <div
          onClick={() => onRouteChange('register')}
          className="pl3 pr3 br3 pointer inline-flex justify-center items-center dim"
        >
          <button className="pointer color-mine underline pa0 bg-transparent ttc fw4 no-border">
            {'Register'}
          </button>
        </div>
        <div
          onClick={() => onRouteChange('signin')}
          className="pl3 pr3 br3 pointer inline-flex justify-center items-center dim"
        >
          <button className="pointer underline color-mine bg-transparent pa0 ttc fw4 no-border">
            {'Sign In'}
          </button>
        </div>
      </nav>
    );
  }
};

export default Nav;
