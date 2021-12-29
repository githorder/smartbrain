import React from 'react';
import Tilty from 'react-tilty';

import logo from './brain.png';

const Logo = () => {
  return (
    <Tilty
      className="bg-mine ml4 w4 h4 flex items-center justify-center shadow-3 br3 tilty"
      scale={1.05}
    >
      <img className="w3 white" src={logo} alt="logo" />
    </Tilty>
  );
};

export default Logo;
