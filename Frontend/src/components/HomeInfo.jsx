import React from 'react';
import { ArrowDown, ArrowRight, Square, PiggyBank } from 'lucide-react';

export default function FinanceManagement() {
  return (
    <div className="flex items-center justify-center h-screen w-full font-grotesk">
      <div className="text-white w-1/2 flex justify-center items-center h-full">
        <div className="text-7xl font-bold tracking-tight">
          <div className="flex items-center mb-2">
            <span>conduct</span>
          </div>
          
          <div className="flex items-center mb-2">
            <span>your</span>
            <div className="w-8 h-8 rounded-full bg-purple-500 mx-2"></div>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-black mr-2 border border-white/30"></div>
            <span>fin life</span>
          </div>
          
          <div className="flex items-center mb-2">
            <span>every</span>
            <div className="w-8 h-8 bg-amber-300 mx-2"></div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black mr-2 border border-white/30"></div>
            <span>where</span>
          </div>
          
          <div className="flex justify-center mt-4">
            <ArrowDown size={50}
            onClick={() => window.scrollBy({ top: window.innerHeight + 80, behavior: "smooth" })}
            className="cursor-pointer"/>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full p-4 flex justify-end items-center flex-col">
        {/* Finance Dashboard UI */}
        <div className="flex gap-5">

          {/* Budget Card */}
          <div className="w-80 h-60 rounded-lg overflow-hidden bg-[#121212] border border-white/20">
            <div className="p-6 flex flex-col h-full relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-yellow-200"></div>
                <span className="text-white text-sm opacity-70">Budget on Feb</span>
              </div>
              <div className="text-4xl font-bold text-green-50 mb-4">₹20,458</div>
              
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-white text-sm opacity-70">Spent on Feb</span>
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-8">₹10,649</div>
              
              <div className="mt-auto flex justify-between items-center ">
                <div className="text-xs text-white opacity-50">Feb 1</div>
                <div className="flex-grow mx-4 relative">
                  <div className="h-px w-full bg-gray-500 opacity-30"></div>
                  <div 
                    className="absolute bottom-0 left-0 h-8 w-full" 
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'%3E%3Cpath d='M0,25 C30,5 70,20 100,0' fill='none' stroke='%23ffffff' stroke-opacity='0.2' stroke-width='1'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%"
                    }}>
                  </div>
                </div>
                <div className="text-xs text-white opacity-50">Feb 28</div>
              </div>
            </div>
          </div>
          
          
          {/* Savings Account Card */}
          <div className="flex flex-col justify-center h-80 bg-[#121212] rounded-lg p-6 text-white border border-white/20">
            <div className="flex items-center gap-2 mb-6">
              <PiggyBank className="text-purple-600" size={40} />
              <span className="text-xl">Savings account</span>
            </div>
            
            <div className="text-sm mb-4">I want to save</div>
            
            <div className="flex gap-2 mb-4">
              <button className="bg-black text-white px-4 py-1 rounded text-sm">₹500</button>
              <button className="border border-gray-300 px-4 py-1 rounded text-sm">Every Monday</button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm">for a</span>
              <button className="border border-gray-300 px-4 py-1 rounded text-sm">New Car</button>
            </div>
          </div>
        </div>
        <div>
        <div className='text-white text-end mt-8'>
          <h2 className="text-[29px] font-bold mb-1">Finance Management Made Simple & Smarter</h2>
          <p className="text-[19px] mb-8">Make better financial decisions with our expense tracker, investment planner and cost calculator</p>
        </div>
        </div>
        
        
      </div>
    </div>
  );
}