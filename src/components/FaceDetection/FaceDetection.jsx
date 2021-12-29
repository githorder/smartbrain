import React from 'react';

const FaceDetection = ({ onloadImg, imageURL, box, landmarksObj }) => {
  let styleForDetectBox = {};

  if (Object.keys(landmarksObj).length !== 0) {
    let { width, height } = box;
    let { left_col, right_col, top_row, bottom_row } =
      landmarksObj.regions[0].region_info.bounding_box;

    styleForDetectBox = {
      left: `${left_col * width}px`,
      top: `${top_row * height}px`,
      width: `${(right_col - left_col) * width}px`,
      height: `${(bottom_row - top_row) * height}px`,
      border: '2px solid blue',
    };
  } else if (Object.keys(landmarksObj).length === 0) {
    styleForDetectBox = {};
  }

  return (
    <div className="flex justify-center">
      <div className="relative mb4 flex items-center justify-center tilty">
        <img
          onLoad={onloadImg}
          className="br2"
          width="300px"
          height="auto"
          src={imageURL}
          alt=""
        />
        <div style={styleForDetectBox} className="absolute pointer"></div>
      </div>
    </div>
  );
};

export default FaceDetection;
