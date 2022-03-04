import React from 'react';

const ImageInputForm = ({ onChangeInput, onClickBtn }) => {
  return (
    <div className="w-full justify-center items-center inline-flex">
      <div className="relative">
        <input
          id="search"
          onChange={onChangeInput}
          autoComplete={'off'}
          className="h-16 pl-12 sm:w-450 rounded-md bg-transparent shadow-2xl placeholder:text-slate-50 focus:outline-none focus:border-slate-50 focus:border-2 outline-transparent bg-neutral-200"
          type="search"
          placeholder="Type image URL to detect a face"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 top-1/3 left-3 absolute stroke-slate-50"
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
        <div className="absolute translate-x-1/2 top-[130%] right-2/4">
          <button
            onClick={onClickBtn}
            className="bg-slate-50 hover:text-cyan-500 w-20 flex justify-center items-center rounded-md py-2 px-16 uppercase shadow-2xl"
          >
            {'detect'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInputForm;
