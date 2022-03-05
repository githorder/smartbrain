import React from 'react';
import Typewriter from 'typewriter-effect';

const Rank = ({ userName, rank }) => {
  return (
    <div className="text-center">
      <div className="inline-flex justify-center items-center flex-col my-10">
        <h2 className="text-xl sm:text-xl md:text-2xl  lg:text-3xl font-light tracking-widest text-slate-500 capitalize">
          {userName || 'unknown'}, your rank number is
        </h2>
        <div className="flex items-center h-10">
          <Typewriter
            options={{
              strings: [
                `<span class="underline cursor-pointer text-cyan-500 text-xl font-light tracking-widest">
              #${rank}
          </span>`,
              ],
              autoStart: true,
              loop: true,
              delay: 55,
              deleteSpeed: 55,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Rank;

// <span className="underline hover:cursor-pointer hover:text-cyan-500">
//   {`  #${rank}` || 'unknown'}
// </span>
