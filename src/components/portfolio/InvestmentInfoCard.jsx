/**
 * This file contains code for the Cards that display the investment information in the portfolio page.
 * This component is common for both the cards, My Investment and Current Value cards
 */
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { IconPositivePctChange, IconNegativePctChange } from '../ui/icons';

// TODO: take the data required for graph as a prop and format the it as required by the chart
const InvestmentInfoCard = ({ cardHeader, amount, baseAmount, chartData }) => {
  const chartRef = useRef(null);

  // convert amount in float to the formatted string to display
  const formattedAmount = `$${amount.toLocaleString()}`;
  const amountPctChange = (((amount - baseAmount) / baseAmount) * 100).toFixed(
    2
  );

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        show: false,
        type: 'category',
      },
      yAxis: {
        show: false,
        type: 'value',
      },
      grid: {
        width: 150,
        height: 125,
        bottom: 0,
        left: 0,
      },
      series: [
        {
          data: chartData.map(item => item.value), // TEMP: will need to update if the key is changed,
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: amount > baseAmount ? '#007c00' : '#b72a2a',
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: amount > baseAmount ? '#007c00' : '#b72a2a',
              },
              {
                offset: 1,
                color: '#FFFFFF',
              },
            ]),
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [chartData, amount, baseAmount]);

  return (
    <div className="h-[145px] min-w-[329px] flex-1 flex flex-row justify-between rounded bg-white">
      <div className="flex flex-col justify-between pl-4 py-4">
        <div>
          <div className="font-medium pb-1">{cardHeader}</div>
          <div
            className={` text-5xl font-semibold ${
              amount > baseAmount ? 'text-green' : 'text-red'
            }`}
          >
            {formattedAmount}
          </div>
        </div>
        <div className="flex flex-row items-center">
          {amount > baseAmount ? (
            <IconPositivePctChange className="mr-2 w-5 h-5" />
          ) : (
            <IconNegativePctChange className="mr-2 w-5 h-5" />
          )}
          <div
            className={`text-base font-medium ${
              amount > baseAmount ? 'text-green' : 'text-red'
            }`}
          >
            {amountPctChange}%
          </div>
        </div>
      </div>
      <div
        ref={chartRef}
        className="rounded w-[152px] h-[125px] overflow-hidden pt-5"
      ></div>
    </div>
  );
};

export default InvestmentInfoCard;
