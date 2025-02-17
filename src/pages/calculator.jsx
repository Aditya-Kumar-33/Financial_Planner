import React from 'react'
import DonutChart from '../components/DonutChart'
import ButtonWMY from '../components/ButtonWMY'
import InputBoxNum from '../components/InputBoxNum'
import InputBoxPercentage from '../components/InputBoxPercentage'
import InputDuration from '../components/InputDuration'
import InputInflation from '../components/InputInflation'
import Button from '../components/Button'

const Calculator = () => {

  return (
    <>
      <div className='h-screen w-screen bg-white flex gap-[4px] p-[30px] items-center'>
        <div className='w-1/2 h-full bg-gray-400 rounded-4xl flex flex-col items-center gap-2'>
          <ButtonWMY/>
          <InputBoxNum label={'Amount'} placeholder='₹ 0'/>
          <InputBoxPercentage label={'Interest Rates'} placeholder='0'/>
          <InputDuration label='Duration' placeholder='0'/>
          <InputInflation label='Inflation Percentage' placeholder='0'/>
          <Button text='Calculate Now' />
        </div>
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