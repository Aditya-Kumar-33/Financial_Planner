import React from 'react'

export default function Metals({item}) {
  return (
    <>
      <td className="py-3 px-3">{item.currentPrice}</td>
      <td className="py-3 px-3">
        <div className="flex flex-col gap-1">
            <span>{item.fiftyTwoWeekHigh}</span>
            <span>{item.fiftyTwoWeekLow}</span>
        </div>
      </td>

      <td className="py-3 px-3 text-green-500">{item.dailyChange}</td>
      <td className="py-3 px-3">
        {item.growth['1Y']}
      </td>
      <td className="py-3 px-3">{item.liquidity.split(' ')[0]}</td>
    </>
  )
}

export function MetalsExpanded({item}) {
  return (
    <>
      <div className='flex flex-col gap-8 p-4 text-white/90'>
        <div className="">
          <h4 className="font-medium text-lg">Investment Details</h4>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="font-medium p-2">Investment Type:</td>
                <td className="p-2">{item.investmentType}</td>
              </tr>
              <tr className="border-b">
                <td className="font-medium p-2">Liquidity:</td>
                <td className="p-2">{item.liquidity}</td>
              </tr>
              <tr>
                <td className="font-medium p-2">Taxation:</td>
                <td className="p-2">{item.taxation}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4 className="font-medium">Growth Performance</h4>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {Object.entries(item.growth).map(([period, value]) => (
              <div key={period} className="bg-[#24263C] p-2 rounded-md">
                <div className="text-xs text-gray-500">{period}</div>
                <div className="font-medium text-green-500">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}
