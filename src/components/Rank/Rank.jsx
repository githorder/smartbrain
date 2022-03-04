import React from 'react';
import Typewriter from 'typewriter-effect';

const Rank = ({ userName, rank }) => {
  return (
    <div className="p-20 text-3xl text-center  text-gray-50 h-40 lg:w-[32rem]">
      <Typewriter
        options={{
          strings: [
            `<div class="inline-flex justify-center items-center"><h2>${userName}, your rank number is #${rank}</h2></div>`,
          ],
          autoStart: true,
          loop: true,
          delay: 55,
          deleteSpeed: 55,
        }}
      />
    </div>
  );
};

export default Rank;
