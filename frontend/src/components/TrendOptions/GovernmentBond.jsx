import React from 'react'

export default function GovernmentBond({item}) {
  return (
    <>
        <td className="py-3 px-3">{item.currentYield}</td>
        <td className="py-3 px-3">{item.couponRate}</td>
        <td className="py-3 px-3">{item.maturityPeriod}</td>
        <td className="py-3 px-3">{item.riskLevel}</td>
        <td className="py-3 px-3">{item.liquidity}</td>
        <td className="py-3 px-3 text-sm">{item.taxation}</td>
    </>
  )
}


export function GovernmentBondExpanded({item}) {
  return (
    <>
        <div className="p-4">
  <h4 className="font-medium text-lg mb-3">Bond Details</h4>
  <table className="w-full text-sm">
    <tbody>
      <tr>
        <td className="font-medium p-2">Current Yield:</td>
        <td className="p-2">{item.currentYield}</td>
      </tr>
      <tr>
        <td className="font-medium p-2">Coupon Rate:</td>
        <td className="p-2">{item.couponRate}</td>
      </tr>
      <tr>
        <td className="font-medium p-2">Maturity Period:</td>
        <td className="p-2">{item.maturityPeriod}</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="p-4">
  <h4 className="font-medium text-lg mb-3">Risk & Liquidity</h4>
  <table className="w-full text-sm">
    <tbody>
      <tr>
        <td className="font-medium p-2">Risk Level:</td>
        <td className="p-2">{item.riskLevel}</td>
      </tr>
      <tr>
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

        </>
  )
}
