import React from 'react';

import './ImageInputForm.css';

const ImageInputForm = ({ onChangeInput, onClickBtn }) => {
  return (
    <div className="w-full justify-center items-center inline-flex">
      <div className="relative">
        <input
          id="search"
          onChange={onChangeInput}
          autoComplete={'off'}
          className="h-16 pl-4 w-450 rounded-full outline-transparent bg-neutral-200 "
          type="search"
          placeholder="Type image URL to detect a face"
        />
        <div className="absolute top-0 right-0">
          <button onClick={onClickBtn} className="group">
            <div className="bg-pink-600 group-hover:bg-pink-700 w-16 flex justify-center items-center h-16 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInputForm;
