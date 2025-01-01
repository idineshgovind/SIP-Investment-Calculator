import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { SIPData } from '../types';
import { chartConfig } from '../utils/chartConfig';
import { formatCurrency } from '../utils/calculations';

interface ResultSectionProps {
  darkMode: boolean;
  sipData: SIPData[];
}

const ResultSection: React.FC<ResultSectionProps> = ({ darkMode, sipData }) => {
  const chartRef = useRef<any>(null);
  const cardClass = `p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} backdrop-blur-lg transition-all duration-300`;

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const { data, options } = chartConfig(sipData, darkMode);
  const lastData = sipData[sipData.length - 1];

  return (
    <div className={cardClass}>
      <div className="mb-8">
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Investment Summary
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5">
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">Total Investment</p>
            <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
              {formatCurrency(lastData?.investment || 0)}
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
            <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2">Interest Earned</p>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
              {formatCurrency(lastData?.interest || 0)}
            </p>
          </div>
          <div className="col-span-2 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5">
            <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Maturity Value</p>
            <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">
              {formatCurrency(lastData?.total || 0)}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-8 p-4 rounded-xl bg-white dark:bg-gray-800" style={{ height: '400px' }}>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default ResultSection;