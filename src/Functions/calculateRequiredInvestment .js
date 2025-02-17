export const calculateRequiredInvestment = ({ 
    pattern, // "weekly", "monthly", or "yearly"
    targetAmount, // Desired final amount after duration
    stepUpPercentage, // Percentage increase in investment annually
    inflationRate, // Annual inflation rate
    returnRate, // Annual expected return rate
    years 
}) => {
    const periods = { weekly: 52, monthly: 12, yearly: 1 };
    const n = periods[pattern]; 

    let low = 1, high = targetAmount, mid, requiredInitialInvestment;
    
    // Binary search for the initial investment required to reach the target amount
    while (high - low > 0.01) {  
        mid = (low + high) / 2;
        let totalAmount = 0;
        let principalInvested = 0;
        let currentInvestment = mid;

        for (let year = 1; year <= years; year++) {
            for (let i = 0; i < n; i++) {
                totalAmount += currentInvestment;
                principalInvested += currentInvestment;
            }

            totalAmount *= (1 + returnRate / 100); // Apply expected return rate
            currentInvestment += (currentInvestment * stepUpPercentage) / 100; // Step-up investment
            totalAmount /= (1 + inflationRate / 100); // Adjust for inflation
        }

        if (totalAmount >= targetAmount) {
            requiredInitialInvestment = mid;
            high = mid;
        } else {
            low = mid;
        }
    }

    // Compute final values based on the found required initial investment
    let totalAmount = 0;
    let principalInvested = 0;
    let currentInvestment = requiredInitialInvestment;

    for (let year = 1; year <= years; year++) {
        for (let i = 0; i < n; i++) {
            totalAmount += currentInvestment;
            principalInvested += currentInvestment;
        }

        totalAmount *= (1 + returnRate / 100);
        currentInvestment += (currentInvestment * stepUpPercentage) / 100;
        totalAmount /= (1 + inflationRate / 100);
    }

    const returnsEarned = totalAmount - principalInvested;

    return {
        initialInvestmentRequired: requiredInitialInvestment.toFixed(2),
        totalPrincipalInvested: principalInvested.toFixed(2),
        returnsEarned: returnsEarned.toFixed(2),
    };
};
