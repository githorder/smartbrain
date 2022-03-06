import React from 'react';

const ImageInputForm = ({ onChangeInput, onClickBtn, onClickSVG }) => {
  return (
    <div className="w-full justify-center items-center inline-flex">
      <div className="relative">
        <input
          id="search"
          onChange={onChangeInput}
          autoComplete={'off'}
          className="h-16 pl-12 rounded-md bg-blue-50 shadow-2xl placeholder:text-slate-900 placeholder:font-extralight focus:outline-none focus:border-cyan-500 focus:border-2 outline-transparent w-80"
          type="search"
          placeholder="Type image URL to detect a face"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 top-1/3 left-3 absolute stroke-slate-900"
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
        <svg
          onClick={onClickSVG}
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 fill-slate-50 w-16 rounded-md shadow-md p-2.5 absolute right-0 cursor-pointer hover:translate-x-1.5 active:scale-90 ease-in duration-300 top-0 bg-red-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <div className="absolute translate-x-1/2 top-[130%] right-2/4">
          <button
            onClick={onClickBtn}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:translate-y-1.5 ease-in duration-300 w-20 flex justify-center items-center rounded-md py-2 px-16 mb-4 uppercase shadow-2xl text-slate-50"
          >
            {'detect'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInputForm;
