import React from 'react'
import DonutChart from '../components/DonutChart'

const Calculator = () => {
  return (
    <>
      <div className='h-screen w-screen bg-black flex gap-5 items-center'>
        <div className='w-1/2 h-[90%] bg-amber-700'></div>
        <div className='w-1/2 h-[90%] bg-gray-100 flex justify-center items-center'>
          <DonutChart/>
        </div>
      </div>
    </>
  )
}

export default Calculator