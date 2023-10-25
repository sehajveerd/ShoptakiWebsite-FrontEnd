import React from 'react';

const Label = props => {
  const { text, required, htmlFor } = props;
  return (
    <>
      <label htmlFor={htmlFor}>
        <span className="font-bold text-black text-sm">{text}</span>
        {required && <span className="text-red text-sm">*</span>}
      </label>
    </>
  );
};

export default Label;
