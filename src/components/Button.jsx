import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className='group relative overflow-hidden cursor-pointer md:text-2xl leading-6'
    >
      <span className='inline-block p-1 transition duration-500 text-black ease-out group-hover:-translate-y-[120%]'>
        {children}
      </span>
      <span className='absolute left-0 text-Secondary translate-y-[120%] rotate-45 inline-block p-2 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>
        {children}
      </span>
    </div>
  );
};

export default Button;
