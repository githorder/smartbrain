import React from 'react';
import Typewriter from 'typewriter-effect';

const Rank = ({ userName, rank }) => {
  return (
    <div className="h3">
      <Typewriter
        options={{
          strings: [
            `<div class="fw1 color-mine inline-flex justify-center items-center"><h2 class="ttc pa2 f5 measure">${userName}, your rank number is</h2> <h3 class="pa2 f3 measure underline">#${rank}</h3></div>`,
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Rank;
