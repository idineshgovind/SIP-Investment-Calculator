import { SIPData } from '../types';

interface CalculationParams {
  sipAmount: number;
  startAge: number;
  endAge: number;
  interestRate: number;
  yearlyIncrement: number;
  isCompoundInterest: boolean;
}

export const formatCurrency = (amount: number): string => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(Math.round(amount));
};

export const calculateSIPData = ({
  sipAmount,
  startAge,
  endAge,
  interestRate,
  yearlyIncrement,
  isCompoundInterest,
}: CalculationParams): SIPData[] => {
  const years = endAge - startAge;
  let currentSIP = sipAmount;
  let totalInvestment = 0;
  const data: SIPData[] = [];

  for (let year = 1; year <= years; year++) {
    const yearlyInvestment = currentSIP * 12;
    totalInvestment += yearlyInvestment;

    let yearlyInterest = 0;
    if (isCompoundInterest) {
      const monthlyRate = interestRate / (12 * 100);
      const months = year * 12;
      const futureValue = currentSIP * 
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
        (1 + monthlyRate);
      yearlyInterest = Math.round(futureValue - totalInvestment);
    } else {
      yearlyInterest = Math.round((totalInvestment * interestRate) / 100);
    }

    data.push({
      year,
      investment: Math.round(totalInvestment),
      interest: yearlyInterest,
      total: Math.round(totalInvestment + yearlyInterest)
    });

    currentSIP += yearlyIncrement;
  }

  return data;
};