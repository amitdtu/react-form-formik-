import React from 'react';

export const RangeInput = ({ min, max, step, ...props }) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <div>
        <span>min {min}</span>
        <span>max {max}</span>
      </div>
      <input type="range" min={min} max={max} step={step} {...props} />
    </div>
  );
};

export default RangeInput;
