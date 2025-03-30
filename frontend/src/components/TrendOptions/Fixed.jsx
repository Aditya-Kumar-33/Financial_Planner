import React from 'react'

export default function Fixed({item}) {
  return (
    <>
        <td className="py-3 px-3">{item.currentInterestRate}</td>
        <td className="py-3 px-3">{item.lockInPeriod}</td>
        <td className="py-3 px-3">{item.minimumInvestment}</td>
        <td className="py-3 px-3">{item.maximumInvestment}</td>
        <td className="py-3 px-3">{item.compoundingFrequency}</td>
    </>
  )
}

export function FixedExpanded({item}) {
  return (
    <>
        <div className="pl-4 shadow-md">
        <h4 className="font-medium text-lg mb-1">Investment Details</h4>
        <table className="w-full border-collapse">
            <tbody>
            <tr className="border-b">
                <td className="font-medium p-2">Lock-in Period:</td>
                <td className="p-2">{item.lockInPeriod}</td>
            </tr>
            <tr className="border-b">
                <td className="font-medium p-2">Min Investment:</td>
                <td className="p-2">{item.minimumInvestment}</td>
            </tr>
            <tr>
                <td className="font-medium p-2">Max Investment:</td>
                <td className="p-2">{item.maximumInvestment}</td>
            </tr>
            </tbody>
        </table>
        </div>
        
        <div className='flex flex-col gap-3'>
        <div>
        <h4 className="font-medium text-lg mb-1">Historical Interest Rates</h4>
        <p className="text-sm">{item.historicalInterestRates}</p>
      </div>
            <div>
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="font-medium p-2 pl-0">Withdrawal Rules:</td>
                  <td className="p-2">{item.withdrawalRules}</td>
                </tr>
                <tr>
                  <td className="font-medium p-2 pl-0">Tax Benefits:</td>
                  <td className="p-2">{item.taxBenefits}</td>
                </tr>
              </tbody>
            </table>
                  </div>
        </div>
    </>
  )
}
