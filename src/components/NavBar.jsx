import React, { useState } from 'react';
import logo from '../assets/logo.png'
import pfp from '../assets/profilepic.png'
import NavButton from './NavButton';
import AnimatedButton from './AnimatedButton';
import { FaChevronCircleRight } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdAccountCircle } from 'react-icons/md';


const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const buttonNames = ["Calculator", "Investment", "Savings", "News"];

  return (

    <>
      <div className='absolute top-5 left-[10%] bg-white w-[80%] h-16 rounded-md backdrop-blur-md flex justify-center font-inter'>
        <nav className='flex justify-between w-[90%] bg-amber-100'>
          <div id='Icon & Name' className="flex shrink-0 items-center w-1/5 gap-3">
              <img className="h-10 w-auto rounded-lg" src={logo} alt="Your Company" />
              <p className='font-semibold text-lg'>Finora</p>
          </div>
          <div className='w-4/5 bg-white flex justify-end items-center gap-4'>
              {buttonNames.map((buttonName,ind) => (<NavButton name={buttonName}/>))}
              
              {/* <div className='ml-5 bg-green-400 hover:bg-green-500 w-fit h-fit text-black hover:translate-x-1 py-2.5 px-5 rounded-lg transition-transform duration-300 font-semibold'>
                <button>Get Started for free</button>
              </div> */}

              {loggedIn ? (
                <>
                <AnimatedButton text="Login" color="bg-blue-500" color2="bg-blue-600">
                  <MdAccountCircle />
                </AnimatedButton>
                
                <AnimatedButton text="Get Started for free" color="bg-green-500" color2="bg-green-600">
                <RiLoginCircleFill />
              </AnimatedButton>
                </>
                ) : "" }
          </div>
        </nav>
      </div>
    </>

    // <nav className="bg-[#ffffff] h-[9%]">
    //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-16 items-center justify-between">
    //       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //         <div className="flex shrink-0 items-center">
    //           <img className="h-8 w-auto" src={logo} alt="Your Company" />
    //         </div>
    //         <div className="hidden sm:ml-10 sm:block">
    //           <div className="flex space-x-4">
    //           <a href="#" className="relative rounded-md bg- px-3 py-2 text-sm font-bold text-blue-800">
    //                 Calculator
    //             <span className="absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2 border-b-[3px] border-blue-800"></span>
    //           </a>
    //             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-800 hover:text-white">Savings</a>
    //             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-800 hover:text-white">Investments</a>
    //             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-800 hover:text-white">News</a>
    //           </div>
    //         </div>
    //       </div>

          
    //       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //         <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
    //           <span className="absolute -inset-1.5"></span>
    //           <span className="sr-only">View notifications</span>
    //           <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    //           </svg>
    //         </button>
    //         <div className="relative ml-3">
    //           <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none" id="user-menu-button">
    //             <span className="sr-only">Open user menu</span>
    //             <img className="size-8 rounded-full" src={pfp} alt="User" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;