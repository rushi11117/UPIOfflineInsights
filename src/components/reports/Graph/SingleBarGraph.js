import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import stringProcessing from '../../Utils/stringProcessing';

const SingleBarChart = ({ occurence, flag1 }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  const optimizeLable = (str) => {
    return str.split(' ')[1];
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      const keys = Object.keys(occurence);
      const values = Object.values(occurence);

      const processedKeys = keys.map(stringProcessing);
      let finalProcessedKeys = processedKeys;

      if (flag1) {
        finalProcessedKeys = finalProcessedKeys.map(optimizeLable);
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: finalProcessedKeys,
          datasets: [{
            label: 'Transactions',
            data: values,
            backgroundColor: ['green', 'red', 'yellow', 'blue'],
            borderColor: 'black',
            borderWidth: 1,
            categoryPercentage: 0.9,
            barPercentage: 0.8,
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true,
              position: 'left',
              min: 0,
              max: Math.max(...values) * 1.5
            },
            x: {
              display: true,
              min: 0,
              max: Math.max(...values) * 1.5,
              grid: {
                display: false,
              },
              ticks: {
                display: true,
                callback: function (value, index, values) {
                  const chartWidth = this.chart.width;
                  const percentage = 0.1;
                  return ((value / chartWidth) * 100 * percentage).toFixed(0);
                }
              }
            }
          },
          plugins: {
            customLegend: {
              render: (chart) => {
                const legendContainer = document.getElementById('custom-legend');
                legendContainer.innerHTML = ''; // Clear existing content

                finalProcessedKeys.forEach((key, index) => {
                  const legendItem = document.createElement('div');
                  legendItem.classList.add('legend-item');

                  const legendColor = document.createElement('div');
                  legendColor.classList.add('legend-color');
                  legendColor.style.backgroundColor = chart.data.datasets[0].backgroundColor[index];
                  legendItem.appendChild(legendColor);

                  const legendText = document.createElement('div');
                  legendText.classList.add('legend-text');
                  legendText.innerText = key;
                  legendItem.appendChild(legendText);

                  legendContainer.appendChild(legendItem);
                });
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [occurence]);

  return (
    <div style={{ display: 'flex' }}>
      <div id="custom-legend" className="custom-legend"></div>
      <canvas ref={chartContainer} style={{ width: '60%', height: '400px' }}></canvas>
    </div>
  );
};

export default SingleBarChart;
