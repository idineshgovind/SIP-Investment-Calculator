import React from 'react';
import { HelpCircle } from 'lucide-react';
import { SIPCalculatorProps } from '../types';

const InputSection: React.FC<SIPCalculatorProps & { darkMode: boolean }> = ({
  darkMode,
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
}) => {
  const inputClass = `w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 
    ${darkMode 
      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'} 
    transition-all duration-300`;
  
  const labelClass = `block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`;
  const cardClass = `p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} backdrop-blur-lg transition-all duration-300`;

  return (
    <div className={cardClass}>
      <div className="space-y-6">
        <div>
          <label className={labelClass}>
            Monthly SIP Amount
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">(₹)</span>
            <HelpCircle className="w-4 h-4 inline ml-2 text-indigo-500" />
          </label>
          <input
            type="number"
            value={sipAmount || ''}
            onChange={(e) => setSipAmount(Math.max(0, Number(e.target.value)))}
            className={inputClass}
            placeholder="Enter monthly amount"
          />
        </div>

        <div>
          <label className={labelClass}>
            Start Age: {startAge}
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={startAge}
            onChange={(e) => setStartAge(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className={labelClass}>
            End Age: {endAge}
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={endAge}
            onChange={(e) => setEndAge(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className={labelClass}>
            Interest Rate: {interestRate}%
          </label>
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className={labelClass}>
            Yearly SIP Increment
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">(₹)</span>
          </label>
          <input
            type="number"
            value={yearlyIncrement || ''}
            onChange={(e) => setYearlyIncrement(Math.max(0, Number(e.target.value)))}
            className={inputClass}
            placeholder="Enter yearly increment"
          />
        </div>

        <div className="flex items-center gap-4">
          <label className={`flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
            <input
              type="checkbox"
              checked={isCompoundInterest}
              onChange={(e) => setIsCompoundInterest(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            />
            Compound Interest
          </label>
        </div>
      </div>
    </div>
  );
};

export default InputSection;