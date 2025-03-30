export const calculateRequiredInvestment = ({pattern, repeatingInvestment, targetAmount, duration, stepUpPercentage, inflationRate, returnRate}) => {
    // Convert percentages to decimals
    let inflationDecimal = inflationRate / 100;
    let returnDecimal = returnRate / 100;
    let months = 0;
    let years = 0;
    if (pattern === "monthly"){
        months = duration;
        years = months / 12;
    }
        
    else if (pattern === "yearly"){
        months = duration * 12;
        years = duration;
    } 

    // else months = duration * 12 * 4;
    let monthlyRate = returnDecimal / 12; // Monthly return rate

    // Adjust future value for inflation
    let futureValue = targetAmount * Math.pow(1 + inflationDecimal, years);

    // Calculate Monthly SIP Investment
    let monthlyInvestment = (futureValue * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

    return { 
        returns: (futureValue - (monthlyInvestment * months)).toFixed(2), // Round to 2 decimal places
        totalInvested: (monthlyInvestment * months).toFixed(2),
        actualTotalInvested: monthlyInvestment.toFixed(2),
        totalAmount: (futureValue).toFixed(2),
    } 
}