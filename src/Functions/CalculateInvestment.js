

const calculateInvestment = ({ 
    pattern, // "weekly", "monthly", or "yearly" str
    initialInvestment, 
    stepUpPercentage, // Percentage increase in investment every year
    inflationRate, // Annual inflation rate
    returnRate, // Annual expected return rate
    years 
}) => {
    const periods = { weekly: 52, monthly: 12, yearly: 1 };
    const n = periods[pattern]; // Number of times investment occurs in a year

    let totalAmount = 0;
    let principalInvested = 0;
    let currentInvestment = initialInvestment;

    for (let year = 1; year <= years; year++) {
        for (let i = 0; i < n; i++) {
            totalAmount += currentInvestment;
            principalInvested += currentInvestment;
        }

        //expected return rate 
        totalAmount *= (1 + returnRate / 100);

        // step-up percentage for the next year
        currentInvestment += (currentInvestment * stepUpPercentage) / 100;

        // formula for inflation
        totalAmount /= (1 + inflationRate / 100);
    }

    const returnsEarned = totalAmount - principalInvested;

    return {
        finalAmount: totalAmount.toFixed(2),
        principalInvested: principalInvested.toFixed(2),
        returnsEarned: returnsEarned.toFixed(2),
    };
};


