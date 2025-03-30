export const calculateInvestment = ({
    pattern, repeatingInvestment, duration, stepUpPercentage, inflationRate, returnRate
}) => {
    
    let r = returnRate / 100;  // Convert to decimal
    let s = stepUpPercentage / 100;
    let i = inflationRate / 100;

    let periodsPerYear;
    if (pattern === "weekly") {
        periodsPerYear = 52;
    } else if (pattern === "monthly") {
        periodsPerYear = 12;
    } else if (pattern === "yearly") {
        periodsPerYear = 1;
    } else {
        throw new Error("Invalid pattern. Use 'weekly', 'monthly', or 'yearly'");
    }

    let n = periodsPerYear;  // Number of periods per year
    let rPeriod = r / n;  // Adjusted rate per period
    let sPeriod = s / n;  // Adjusted step-up rate per period

    let actualTotalInvested = 0;  // Total invested amount without inflation adjustment
    let futureValue = 0;

    for (let k = 0; k < duration; k++) {
        let currentInvestment = repeatingInvestment * Math.pow(1 + sPeriod, k); // Investment with step-up
        actualTotalInvested += currentInvestment;
        futureValue += currentInvestment * Math.pow(1 + rPeriod, duration - k - 1); // Correct compounding
    }

    // Inflation-adjusted values
    let inflationFactor = Math.pow(1 + i, duration / periodsPerYear);
    let realFutureValue = futureValue / inflationFactor;
    let inflationAdjustedTotalInvested = 0;

    for (let k = 0; k < duration; k++) {
        let currentInvestment = repeatingInvestment * Math.pow(1 + sPeriod, k);
        inflationAdjustedTotalInvested += currentInvestment / Math.pow(1 + i, k / n);
    }

    let realReturn = realFutureValue - inflationAdjustedTotalInvested;

    return {
        totalAmount: realFutureValue.toFixed(2),
        totalInvested: inflationAdjustedTotalInvested.toFixed(2),
        actualTotalInvested: actualTotalInvested.toFixed(2), // New field
        returns: realReturn.toFixed(2)
    };
};
