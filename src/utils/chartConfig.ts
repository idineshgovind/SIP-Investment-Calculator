import { SIPData } from '../types';
import { formatCurrency } from './calculations';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const chartConfig = (sipData: SIPData[], darkMode: boolean) => {
  const data = {
    labels: sipData.map(d => `${d.year}Y`),
    datasets: [
      {
        label: 'Investment',
        data: sipData.map(d => d.investment),
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: '#4F46E5',
        pointHoverBackgroundColor: '#4F46E5',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 2,
        order: 2,
        stack: 'stack1'
      },
      {
        label: 'Returns',
        data: sipData.map(d => d.interest),
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: '#F59E0B',
        pointHoverBackgroundColor: '#F59E0B',
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 2,
        order: 1,
        stack: 'stack1'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'start' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          color: darkMode ? '#fff' : '#1F2937',
          font: {
            size: 12,
            weight: '600' as const,
            family: "'Inter', sans-serif"
          }
        }
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: darkMode ? '#fff' : '#1F2937',
        bodyColor: darkMode ? '#fff' : '#1F2937',
        borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: '600',
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif"
        },
        callbacks: {
          title: (tooltipItems: any) => {
            return `Year ${tooltipItems[0].label.replace('Y', '')}`;
          },
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${formatCurrency(value)}`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        type: 'category',
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
          font: {
            size: 11,
            family: "'Inter', sans-serif"
          },
          maxRotation: 0,
          maxTicksLimit: 6
        }
      },
      y: {
        stacked: true,
        type: 'linear',
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          drawBorder: false
        },
        border: {
          display: false
        },
        ticks: {
          color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
          font: {
            size: 11,
            family: "'Inter', sans-serif"
          },
          callback: (value: number) => formatCurrency(value),
          maxTicksLimit: 6
        }
      }
    }
  };

  return { data, options };
};