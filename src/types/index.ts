export interface SIPData {
  year: number;
  investment: number;
  interest: number;
  total: number;
}

export interface SIPCalculatorProps {
  sipAmount: number;
  setSipAmount: (amount: number) => void;
  startAge: number;
  setStartAge: (age: number) => void;
  endAge: number;
  setEndAge: (age: number) => void;
  interestRate: number;
  setInterestRate: (rate: number) => void;
  yearlyIncrement: number;
  setYearlyIncrement: (increment: number) => void;
  isCompoundInterest: boolean;
  setIsCompoundInterest: (compound: boolean) => void;
}