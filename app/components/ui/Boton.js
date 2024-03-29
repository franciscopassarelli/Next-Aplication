import React from 'react';

const Boton = ({ children, className = '', ...args }) => {
  return (
    <button
      className={`rounded-xl py-2 px-4 md:py-3 md:px-6 bg-blue-400 text-white text-center hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Boton;
