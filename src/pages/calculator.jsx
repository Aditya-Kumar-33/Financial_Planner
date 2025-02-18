import React, { useState } from 'react';
import DonutChart from '../components/DonutChart'
import ButtonWMY from '../components/ButtonWMY'
import InputBoxNum from '../components/InputBoxNum'
import InputBoxPercentage from '../components/InputBoxPercentage'
import InputDuration from '../components/InputDuration'
import InputInflation from '../components/InputInflation'
import Button from '../components/Button'
import { calculateRequiredInvestment } from '../Functions/calculateRequiredInvestment '
import { calculateInvestment } from '../Functions/CalculateInvestment'

const Calculator = () => {
  const [activeButton, setActiveButton] = useState("target"); // 'target' or 'growth'
  return (

    <>
      <div className='h-screen w-screen grid grid-rows-[5%,95%]'>
        <div className='h-full w-full bg-white flex justify-center items-center gap-[30px]'>
          <button
            type="button"
            onClick={() => {setActiveButton("target") 
              console.log(activeButton)
            }}
            className={`text-white ${activeButton === "target" ? 'bg-blue-700 hover:bg-blue-800' : 'bg-white border-2 border-blue-700 text-blue-700'} 
                        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-[11.5px] me-2 mb-2 
                        dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          >
            Set Target
          </button>

          <button
            type="button"
            onClick={() => {setActiveButton("growth")
              console.log(activeButton)
            }
            }
            className={`text-white ${activeButton === "growth" ? 'bg-blue-700 hover:bg-blue-800' : 'bg-white border-2 border-blue-700 text-blue-700'} 
                        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-[10px] me-2 mb-2 
                        dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          >
            Track Growth
          </button>

        </div>

        <div className='h-full w-full bg-white flex gap-[4px] p-[30px] items-center'>
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
