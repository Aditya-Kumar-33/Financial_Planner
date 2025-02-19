import React, { useState } from 'react';
import DonutChart from '../components/DonutChart'
import ButtonWMY from '../components/ButtonWMY'
import ButtonCalc from '../components/ButtonCalc'
import InputBoxNum from '../components/InputBoxNum'
import InputBoxPercentage from '../components/InputBoxPercentage'
import InputDuration from '../components/InputDuration'
import InputInflation from '../components/InputInflation'
import Button from '../components/Button'
import { calculateRequiredInvestment } from '../Functions/calculateRequiredInvestment'
import { calculateInvestment } from '../Functions/CalculateInvestment'

const Calculator = () => {
  return (
    <>
      <div className='h-screen w-screen grid grid-rows-[5%,95%]'>
        <div className='h-full w-full bg-white flex justify-center items-center gap-[30px]'>
          <ButtonCalc/>
        </div>

        <div className='h-full w-full bg-white flex gap-[4px] p-[30px] pt-[0px] items-center'>
          <div className='w-1/2 h-full bg-gray-400 rounded-4xl flex flex-col items-center gap-2 py-2'>
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
            <DonutChart principal={25000} returns={5000} total={7000} />
          </div>
        </div>
      </div>
    </>
  )
  }

export default Calculator;
