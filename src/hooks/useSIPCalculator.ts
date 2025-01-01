import { useState, useEffect } from 'react';
import { SIPData } from '../types';
import { calculateSIPData } from '../utils/calculations';

export const useSIPCalculator = () => {
  const [sipAmount, setSipAmount] = useState(2000);
  const [startAge, setStartAge] = useState(19);
  const [endAge, setEndAge] = useState(55);
  const [interestRate, setInterestRate] = useState(12);
  const [yearlyIncrement, setYearlyIncrement] = useState(0);
  const [isCompoundInterest, setIsCompoundInterest] = useState(true);
  const [sipData, setSipData] = useState<SIPData[]>([]);

  useEffect(() => {
    setSipData(calculateSIPData({
      sipAmount,
      startAge,
      endAge,
      interestRate,
      yearlyIncrement,
      isCompoundInterest,
    }));
  }, [sipAmount, startAge, endAge, interestRate, yearlyIncrement, isCompoundInterest]);

  return {
    sipAmount,
    setSipAmount,
    startAge,
    setStartAge,
    endAge,
    setEndAge,
    interestRate,
    setInterestRate,
    yearlyIncrement,
    setYearlyIncrement,
    isCompoundInterest,
    setIsCompoundInterest,
    sipData,
  };
};