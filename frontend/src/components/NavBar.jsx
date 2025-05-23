import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import AnimatedButton from './AnimatedButton';
import { MdAccountCircle } from 'react-icons/md';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Change to false to test login button

  const user = JSON.parse(localStorage.getItem("user")) || { name: "User" };

  const buttonData = [
    { name: "Savings", path: "/savings" },
    { name: "Investment", path: "/investment" },
    { name: "Expense Tracker", path: "/expense-calculator" },
    { name: "Calculator", path: "/investment-calculator" },
    { name: "Facts", path: "/facts" }
  ];

  return (
    <div className='fixed top-5 left-[10%] w-[80%] h-20 
      bg-gradient-to-b from-[#111125] to-transparent 
      shadow-[0_-4px_10px_rgba(255,255,255,0.3)] shadow-blue-500/30 
      border-b border-gray-700 rounded-2xl backdrop-blur-xl 
      flex items-center justify-between px-6 font-inter text-gray-300 z-20'>

      {/* Logo and Title */}
      <div className="flex items-center gap-3 w-1/5 min-w-fit">
        <NavLink className="flex items-center gap-3 cursor-pointer" to="/home">
          <img className="h-10 w-auto rounded-lg" src={logo} alt="Logo" />
          <p className='font-semibold text-lg'>Money Mind</p>
        </NavLink>
      </div>

      {/* Navigation Buttons */}
      <div className='flex gap-7 justify-center items-center flex-1'>
        {buttonData.map((button, index) => (
          <NavLink
            key={index}
            to={button.path}
            className={({ isActive }) =>
              `inline-block px-2 py-1 font-medium transition-all duration-150 ease-in-out 
              ${isActive ? 'text-white underline underline-offset-4' : 'text-gray-300 hover:text-white hover:scale-105'}`
            }
          >
            {button.name}
          </NavLink>
        ))}
      </div>

      {/* Login or User Name */}
      <div className='w-1/5 flex justify-end items-center'>
        {!loggedIn ? (
          <NavLink to="/login">
            <AnimatedButton text="Login" to="/login">
              <MdAccountCircle />
            </AnimatedButton>
          </NavLink>
        ) : (
          <div className='text-white/80 font-grotesk font-bold'>
            Hey, {user.name.split(" ")[0]}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
