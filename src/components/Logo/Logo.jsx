import React from 'react';
import Tilty from 'react-tilty';

import logo from './brain.png';

const Logo = () => {
  return (
    <Tilty
      className="bg-gradient-to-r from-fuchsia-500 to-violet-500 w-40 h-40 rounded-xl p-8"
      scale={1.05}
    >
      <img src={logo} alt="logo" />
    </Tilty>
  );
};

export default Logo;
