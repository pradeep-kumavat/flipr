import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressBar = ({ current, goal }: { current: number, goal: number }) => {
  const percentage = (current / goal) * 100;

  const data = {
    labels: ['Progress'],
    datasets: [
      {
        label: `${current.toLocaleString()} raised of ${goal.toLocaleString()}`,
        data: [percentage],
        backgroundColor: '#28A745', 
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, 
    scales: {
      x: {
        max: 100,
        min: 0,
        grid: {
          display: false,
        },
        ticks: {
          display: false, 
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false, 
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className=''>
    <div style={{ width: '100%', height: '20px', borderRadius: '10px' } }>
      <Bar data={data} options={options} />
    </div>
    </div>
  );
};

export default ProgressBar;