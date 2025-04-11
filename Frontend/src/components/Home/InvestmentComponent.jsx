import React, { useState } from 'react';
import { PlusIcon, CircleDollarSign, ReceiptText, Wallet } from "lucide-react";

const InvestmentComponent = () => {
  const [amount, setAmount] = useState(13245.00);
  const [completedGoals, setCompletedGoals] = useState(2);
  const [totalGoals, setTotalGoals] = useState(10);

  return (
    <div className="bg-gray-400 p-8 rounded-xl max-w-md min-h-full">
      <div className="mb-6 h-full">
        <h1 className="text-2xl font-bold mb-2">
          Track, plan, and manage your finances effortlessly
        </h1>
        <p className="text-gray-600">
          Stay on top of your goals with easy-to-use tools that help you create budgets and stick to them.
        </p>
      </div>

      <div className="h-full bg-white p-6 rounded-xl shadow-sm">
        <div className="h-full flex mb-4">
          <div className="w-[30%] flex flex-col gap-5">
            <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center">
              <ReceiptText/>
            </div>

            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
              <CircleDollarSign/>
            </div>    
          </div>

          <div className="w-[70%] h-full ml-auto bg-gray-900 p-5 rounded-4xl">
            <div className='flex justify-between'>
                <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                    <Wallet/>
                </div>

                <button className="bg-white text-gray-700 px-4 rounded-full border flex items-center">
                <PlusIcon size={16} className="mr-1" />
                <span>Add Goals</span>
                </button>
            </div>

            <div>
                <div className="mt-4">
                <h2 className="text-3xl font-bold">${amount.toFixed(2)}</h2>
                <p className="text-gray-600 mt-1">
                    {completedGoals} out of {totalGoals} goals completed
                </p>
                </div>
            </div>
          </div>

          
        </div>
        
      </div>
    </div>
  );
};

export default InvestmentComponent;