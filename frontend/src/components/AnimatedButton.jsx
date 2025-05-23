import React from 'react';

const LoginButton = () => {


  return (
    <button
      className="group relative flex items-center gap-1 rounded-xl bg-[#62be99] px-3.5 py-2 
      font-bold text-white transition-all duration-200 hover:bg-[#111]"
    >
      Login
      <div className="flex items-center justify-center">
        <div className="relative h-0.5 w-2.5 bg-[#62be99] transition-all duration-200 group-hover:bg-white">
          <div className="absolute -top-0.5 right-0.75 h-1.5 w-1.5 rotate-45 
          border-r-2 border-t-2 border-white transition-all duration-200 group-hover:right-0">
          </div>
        </div>
      </div>
    </button>
  );
};

export default LoginButton;