import React from 'react';
import Tilty from 'react-tilty';

import logo from './javascript_illustration.svg';

const Logo = () => {
  return (
    <div className="absolute top-[20%] left-1/2 -translate-x-1/2">
      <Tilty scale={1.05}>
        <img className="w-48" src={logo} alt="logo" />
      </Tilty>
    </div>
  );
};

export default Logo;
