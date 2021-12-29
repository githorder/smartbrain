import React from 'react';

import './ImageInputForm.css';
import searchIcon from './search.svg';

const ImageInputForm = ({ onChangeInput, onClickBtn }) => {
  return (
    <div className="outline-mine-onhover w-50 relative items-center inline-flex shadow-5 ma4 br-pill">
      <label htmlFor="search" className="pointer">
        <img
          className="w2 h2 icon icon-move absolute"
          src={searchIcon}
          alt="search icon"
        />
      </label>
      <input
        id="search"
        onChange={onChangeInput}
        autoComplete={'off'}
        className="pv3 pl5 w-100 myInput no-border no-outline bg-transparent b--black-10"
        type="search"
        placeholder="Type image URL to detect a face"
      />
      <div className="dim">
        <button
          onClick={onClickBtn}
          className="ttc bg-mine-new pv2 ph4 absolute h2 br3 pointer no-border button-move"
        >
          {'detect'}
        </button>
      </div>
    </div>
  );
};

export default ImageInputForm;
