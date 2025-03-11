import React from 'react'

const NavButton = ({name}) => {
  return (
    <>
        <div className='bg-black w-fit h-fit text-white hover:scale-105 py-1 px-2 rounded-lg transition-transform duration-300 font-medium'>
            <button>{name}</button>
        </div>
    </>
  )
}

export default NavButton