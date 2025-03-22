import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Added import for NavLink
import logo from '../assets/logo.png';
import pfp from '../assets/profilepic.png';
import NavButton from './NavButton';
import AnimatedButton from './AnimatedButton';
import { FaChevronCircleRight } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdAccountCircle } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa'; // Added import for dropdown icon

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [showCalculatorSubmenu, setShowCalculatorSubmenu] = useState(false);
  
  const buttonData = [
    { name: "Savings", path: "/savings" },
    { name: "Calculator", path: "/calculator", hasSubmenu: true },
    { name: "Expense", path: "/expense" },
    { name: "Investment", path: "/investment" },
    { name: "News", path: "/news" },
    { name: "Login", path: "/login" }
  ];
  
  const SubmenuCalculator = () => {
    return (
      <div className="absolute mt-0.5 w-48 bg-[#1E1F2B] rounded-xl shadow-lg z-10 border border-gray-700">
        <NavLink to="/expense-calculator" className= {({isActive}) => `block px-4 py-2 text-sm rounded-t-lg text-gray-300 hover:bg-gray-700 hover:text-white ${isActive ? "font-semibold" : ""}`}>
          Expense Calculator
        </NavLink>
        <NavLink to="/investment-calculator" className= {({isActive}) => `block px-4 py-2 text-sm rounded-b-lg text-gray-300 hover:bg-gray-700 hover:text-white ${isActive ? "font-semibold" : ""}`}>
          Investment Calculator
        </NavLink>
      </div>
    );
  };

  // Modified NavButton for Calculator with dropdown
  const NavButtonWithSubmenu = ({ name, to, hasSubmenu }) => {
    if (hasSubmenu) {
      return (
        <div className="relative pt-1 cursor-pointer" onMouseEnter={() => setShowCalculatorSubmenu(true)} onMouseLeave={() => setShowCalculatorSubmenu(false)}>
          <button className="flex cursor-pointer items-center gap-1 font-medium text-gray-300 hover:text-white rounded-xl">
            {name}
            <FaAngleDown className="text-xs" />
          </button>
          {showCalculatorSubmenu && <SubmenuCalculator />}
        </div>
      );
    }
    
    return <NavButton name={name} to={to} />;
  };

  return (
    <>
      <div className='absolute top-5 left-[10%] bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] border-b border-gray-700 shadow-blue-500/30 w-[80%] h-16 py-10 rounded-2xl backdrop-blur-xl flex justify-center font-inter text-gray-300 z-1'>
        <nav className='flex justify-between w-[90%] '>
          <div id='Icon & Name' className="flex shrink-0 items-center w-1/5 gap-3">
            <img className="h-10 w-auto rounded-lg" src={logo} alt="Your Company" />
            <p className='font-semibold text-lg'>Money Manager</p>
          </div>

          <div className='w-3/5 flex justify-between items-center'>
            <div className='flex gap-7'>
              {buttonData.map((button, ind) => (
                <NavButtonWithSubmenu 
                  key={ind}
                  name={button.name} 
                  to={button.path}
                  hasSubmenu={button.hasSubmenu}
                />
              ))}
            </div>

            {loggedIn ? (
              <>
                <AnimatedButton text="Login" color="bg-[#85EFC4]" color2="bg-[#1E1F2B]" border="border-[#60A5FA]" text1="black" text2="text-[#FACC15]">
                  <MdAccountCircle />
                </AnimatedButton>
              </>
            ) : ""}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;