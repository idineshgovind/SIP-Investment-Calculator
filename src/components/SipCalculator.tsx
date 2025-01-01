import React, { useState } from 'react';
import { Moon, Sun, Calculator } from 'lucide-react';
import InputSection from './InputSection';
import ResultSection from './ResultSection';
import YearlyBreakdown from './YearlyBreakdown';
import { useSIPCalculator } from '../hooks/useSIPCalculator';

const SipCalculator: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const sipCalculator = useSIPCalculator();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <Calculator className="w-8 h-8 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              SIP Calculator
            </span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {darkMode ? <Sun className="w-6 h-6 text-amber-500" /> : <Moon className="w-6 h-6 text-indigo-600" />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputSection darkMode={darkMode} {...sipCalculator} />
          <ResultSection darkMode={darkMode} sipData={sipCalculator.sipData} />
        </div>

        <YearlyBreakdown
          darkMode={darkMode}
          showBreakdown={showBreakdown}
          setShowBreakdown={setShowBreakdown}
          sipData={sipCalculator.sipData}
        />
      </div>
    </div>
  );
};

export default SipCalculator;