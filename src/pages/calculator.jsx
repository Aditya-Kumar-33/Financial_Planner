import React from 'react'
import DonutChart from '../components/DonutChart'

const Calculator = () => {
  return (
    <>
      <div className='h-screen w-screen bg-white flex gap-[4px] p-[30px] items-center'>
        <div className='w-1/2 h-full bg-white'></div>
        <div className='w-1/2 h-full bg-gray-200 rounded-[30px] 
        border-[0.01px] border-gray-300 border-opacity-10 flex 
        justify-center items-center'>

          <DonutChart principal={25000} returns={5000} total ={7000} />
        </div>
      </div>
    </>
  )
}

export default Calculator