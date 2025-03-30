import React from 'react'

export default function Stocks({item}) {
  return (
    <>
        <td className="py-3 px-3">{item.ltp}</td>
        <td className="py-3 px-3">
            <div className="flex flex-col gap">
            <span>{item.fiftyTwoWeekHigh}</span>
            <span>{item.fiftyTwoWeekLow}</span>
        </div>
        </td>

        <td className="py-3 px-3 text-green-500">{item.fiftyTwoWeekChange}</td>
        <td className="py-3 px-3">{item.marketCap}</td>
        <td className="py-3 px-3">{item.dividendYield}</td>
        <td className="py-3 px-3">{item.peRatio}</td>
    </>
  )
}

export function StocksExpanded({item}) {
  return (
    <>
      <div className="flex flex-col gap-10 p-4">
        <div>
          <h4 className="font-medium">About {item.name}</h4>
          <p className="mt-2 text-sm text-white/60">
            {item.name === 'Nifty 50' ?
              "The NIFTY 50 is a benchmark index that represents the weighted average of 50 of the largest Indian companies listed on the National Stock Exchange." :
              "The REIT Index tracks the performance of all listed Real Estate Investment Trusts in India, offering exposure to commercial real estate."}
          </p>
        </div>
        <div>
          <h4 className="font-medium">Historical Performance</h4>
          <div className="mt-2 grid grid-cols-5 gap-2">
            {Object.entries(item.historicalPerformance).map(([period, value]) => (
              <div key={period} className="p-2 bg-[#24263C] rounded-md">
                <div className="text-xs text-white/80">{period}</div>
                <div className={`font-medium ${parseFloat(value) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

