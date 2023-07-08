import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button className={`uppercase border-[1px] border-grayishdarkblue px-8 py-4 font-public-sans tracking-[2px] text-xs leading-none hover:text-white hover:bg-grayishdarkblue ${className}`}>
      {text}
    </button>
  );
};

export default Button;