import React from 'react';
import { SIPData } from '../types';
import { formatCurrency } from '../utils/calculations';

interface YearlyBreakdownProps {
  darkMode: boolean;
  showBreakdown: boolean;
  setShowBreakdown: (show: boolean) => void;
  sipData: SIPData[];
}

const YearlyBreakdown: React.FC<YearlyBreakdownProps> = ({
  darkMode,
  showBreakdown,
  setShowBreakdown,
  sipData,
}) => {
  const cardClass = `mt-8 p-6 rounded-2xl shadow-xl ${
    darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'
  } backdrop-blur-lg transition-all duration-300`;

  return (
    <div className={cardClass}>
      <button
        onClick={() => setShowBreakdown(!showBreakdown)}
        className={`w-full p-4 text-left rounded-xl ${
          darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-50'
        } transition-colors`}
      >
        {showBreakdown ? 'Hide' : 'Show'} Year-wise Breakdown
      </button>
      {showBreakdown && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="p-3 text-left font-semibold text-gray-600 dark:text-gray-300">Year</th>
                <th className="p-3 text-left font-semibold text-gray-600 dark:text-gray-300">Investment</th>
                <th className="p-3 text-left font-semibold text-gray-600 dark:text-gray-300">Interest</th>
                <th className="p-3 text-left font-semibold text-gray-600 dark:text-gray-300">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {sipData.map((data) => (
                <tr
                  key={data.year}
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="p-3 text-gray-600 dark:text-gray-300">Year {data.year}</td>
                  <td className="p-3 text-indigo-600 dark:text-indigo-400">
                    {formatCurrency(data.investment)}
                  </td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">
                    {formatCurrency(data.interest)}
                  </td>
                  <td className="p-3 text-purple-600 dark:text-purple-400">
                    {formatCurrency(data.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default YearlyBreakdown;