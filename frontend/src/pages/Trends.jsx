import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Stocks, {StocksExpanded} from '../components/TrendOptions/Stocks';
import Metals, { MetalsExpanded } from '../components/TrendOptions/Metals';
import Fixed, { FixedExpanded } from '../components/TrendOptions/Fixed';
import GovernmentBond, { GovernmentBondExpanded } from '../components/TrendOptions/GovernmentBond';

const Trends = () => {
  const [selectedCategory, setSelectedCategory] = useState('Stock Market Investments');
  
  // Investment data organized by category
  const investmentData = {
    'Stock Market Investments': [
      {
        name: 'Nifty 50',
        ltp: '23,519.35',
        fiftyTwoWeekHigh: '25,050.70',
        fiftyTwoWeekLow: '21,284.30',
        fiftyTwoWeekChange: '10.50%',
        marketCap: '₹152.4T',
        dividendYield: '1.25%',
        peRatio: '23.8',
        historicalPerformance: {
          '1M': '2.3%',
          '6M': '7.8%',
          '1Y': '10.5%',
          '5Y': '87.6%',
          'All-time': '458.2%'
        }
      },
      {
        name: 'REIT Index',
        ltp: '452.18',
        fiftyTwoWeekHigh: '498.65',
        fiftyTwoWeekLow: '387.92',
        fiftyTwoWeekChange: '16.82%',
        marketCap: '₹1.85T',
        dividendYield: '3.75%',
        peRatio: '19.5',
        historicalPerformance: {
          '1M': '1.8%',
          '6M': '5.2%',
          '1Y': '16.8%',
          '5Y': '48.3%',
          'All-time': '92.5%'
        }
      }
    ],
    'Precious Metals': [
      {
        name: 'Gold',
        currentPrice: '₹73,850/10g',
        fiftyTwoWeekHigh: '₹75,320/10g',
        fiftyTwoWeekLow: '₹58,760/10g',
        dailyChange: '0.45%',
        growth: {
          '1M': '3.2%',
          '6M': '12.8%',
          '1Y': '25.7%',
          '5Y': '102.3%'
        },
        investmentType: 'Physical (Jewelry, Coins, Bars), Digital (Gold ETFs, Gold Mutual Funds)',
        liquidity: 'Medium-High (ETFs are more liquid than physical)',
        taxation: 'LTCG of 20% with indexation benefits for ETFs; Wealth tax for physical gold'
      },
      {
        name: 'Silver',
        currentPrice: '₹95,620/kg',
        fiftyTwoWeekHigh: '₹98,750/kg',
        fiftyTwoWeekLow: '₹71,280/kg',
        dailyChange: '0.85%',
        growth: {
          '1M': '5.8%',
          '6M': '18.2%',
          '1Y': '34.1%',
          '5Y': '112.7%'
        },
        investmentType: 'Physical (Bars, Coins), ETFs, Futures',
        liquidity: 'Medium (ETFs more liquid than physical)',
        taxation: 'LTCG of 20% with indexation benefits for ETFs; Wealth tax for physical silver'
      },
      {
        name: 'Sovereign Gold Bonds',
        currentPrice: '₹7,385/g',
        fiftyTwoWeekHigh: '₹7,532/g',
        fiftyTwoWeekLow: '₹5,876/g',
        dailyChange: '0.42%',
        growth: {
          '1M': '3.0%',
          '6M': '12.5%',
          '1Y': '25.2%',
          '5Y': '105.8%'
        },
        investmentType: 'Government-backed with 2.5% annual interest',
        liquidity: 'Medium (tradable on exchanges, but with limited liquidity)',
        taxation: 'Interest income is taxable; capital gains on maturity are tax-exempt'
      }
    ],
    'Fixed Income Investments': [
      {
        name: 'PPF',
        currentInterestRate: '7.1%',
        lockInPeriod: '15 years',
        minimumInvestment: '₹500',
        maximumInvestment: '₹1.5 lakh/year',
        compoundingFrequency: 'Yearly',
        taxBenefits: 'EEE (Exempt-Exempt-Exempt)',
        withdrawalRules: 'Partial withdrawal allowed from 7th financial year',
        historicalInterestRates: '7.1% (2023-24), 7.1% (2022-23), 7.1% (2021-22), 7.9% (2020-21), 7.9% (2019-20)'
      },
      {
        name: 'Fixed Deposit',
        currentInterestRate: '6.5-7.5%',
        lockInPeriod: '7 days to 10 years',
        minimumInvestment: '₹1,000',
        maximumInvestment: 'No limit',
        compoundingFrequency: 'Quarterly/Monthly',
        taxBenefits: 'Interest income is taxable as per income tax slab',
        withdrawalRules: 'Premature withdrawal allowed with penalty',
        historicalInterestRates: '6.5-7.5% (2023-24), 5.5-7.0% (2022-23), 5.0-6.5% (2021-22), 5.5-7.0% (2020-21)'
      }
    ],
    'Government Bonds & Securities': [
      {
        name: '10Y G-Sec',
        currentYield: '7.15%',
        couponRate: '7.18%',
        maturityPeriod: '10 years',
        riskLevel: 'Very Low (Sovereign)',
        liquidity: 'Medium-High (secondary market)',
        taxation: 'Interest income taxable as per income tax slab'
      },
      {
        name: 'RBI Bonds',
        currentYield: '7.35%',
        couponRate: '7.35%',
        maturityPeriod: '7 years',
        riskLevel: 'Very Low (Sovereign)',
        liquidity: 'Low (Non-tradable, non-transferable)',
        taxation: 'Interest income taxable as per income tax slab'
      }
    ]
  };

  // Define parameters for each category
  const categoryParameters = {
    'Stock Market Investments': [
      'Last Traded', '52-Week High/Low', '52-Week Change (%)', 
      'Market Capitalization', 'Dividend Yield (%)', 'P/E Ratio'
    ],
    'Precious Metals': [
      'Current Price', '52-Week High/Low', 'Daily Change (%)', 
      'Annual Growth (%)', 'Liquidity'
    ],
    'Fixed Income Investments': [
      'Current Interest Rate (%)', 'Lock-in Period', 'Minimum Investment (₹)',
      'Maximum Investment (₹)', 'Compounding Frequency'
    ],
    'Government Bonds & Securities': [
      'Current Yield (%)', 'Coupon Rate (%)', 'Maturity Period',
      'Risk Level', 'Liquidity', 'Taxation'
    ]
  };

  // State to track expanded items
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (itemName) => {
    setExpandedItems({
      ...expandedItems,
      [itemName]: !expandedItems[itemName]
    });
  };

  return (
    <div className="min-h-screen pt-[18vh] p-4 flex justify-center
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] 
    font-dm-sans">
        <div className="w-[95%] mx-auto p-4">

          {/* Category Tabs */}
          <div className="flex font-bold justify-between ">
            {Object.keys(investmentData).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 ${
                  selectedCategory === category
                    ? 'text-[#85EFC4] border-b-2 border-[#85EFC4]'
                    : 'text-white/70 hover:text-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Data Table */}
          <div className="mt-4">
            <table className="w-full">
              <thead>
                <tr className='bg-[#24263C]'> 
                  <th className="py-2 px-3 text-center text-white/50 font-light">Index name</th>
                  {categoryParameters[selectedCategory].map((param, idx) => (
                    <th key={idx} className="py-2 px-3 text-center text-white/50 font-light">
                      {param}
                    </th>
                  ))}
                  <th className="py-2 px-3 text-center text-white/50 font-light">More</th>
                </tr>
              </thead>

              <tbody> 
                {investmentData[selectedCategory].map((item) => (
                  <React.Fragment key={item.name}>
                    <tr className="text-center text-white border-b-2 border-white/40">
                      <td className="py-3 px-3 font-medium">
                        <div className="text-center">
                          {item.name}
                        </div>
                      </td>
        
                      {/* Stock Market Investments */}
                      {selectedCategory === 'Stock Market Investments' && (
                        <Stocks item={item} />
                      )}
        
                      {/* Precious Metals */}
                      {selectedCategory === 'Precious Metals' && (
                        <Metals item={item}/>
                      )}
        
                      {/* Fixed Income Investments */}
                      {selectedCategory === 'Fixed Income Investments' && (
                        <Fixed item={item}/>
                      )}
        
                      {/* Government Bonds & Securities */}
                      {selectedCategory === 'Government Bonds & Securities' && (
                        <GovernmentBond item={item}/>
                      )}
        
                      <td className="py-3 px-3">
                        <button
                          onClick={() => toggleItem(item.name)}
                          className="p-1 rounded-full hover:bg-white hover:text-blue-950 hover:cursor-pointer"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${expandedItems[item.name] ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </td>
                    </tr>
        
                    {/* Expanded Details Row */}
                    {expandedItems[item.name] && (
                      <tr className=" bg-gradient-to-b from-[#111125] to-transparent shadow-[0_4px_12px_rgba(255,255,255,0.2)] text-white">
                        <td colSpan={categoryParameters[selectedCategory].length + 2} className="p-4">
                          <div className="grid grid-cols-2 gap-4">
                            {selectedCategory === 'Stock Market Investments' && (
                              <StocksExpanded item={item}/>
                            )}
        
                            {selectedCategory === 'Precious Metals' && (
                              <MetalsExpanded item={item}/>
                            )}
        
                            {selectedCategory === 'Fixed Income Investments' && (
                              <FixedExpanded item={item}/>
                            )}
        
                            {selectedCategory === 'Government Bonds & Securities' && (
                              <GovernmentBondExpanded item={item}/>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default Trends;