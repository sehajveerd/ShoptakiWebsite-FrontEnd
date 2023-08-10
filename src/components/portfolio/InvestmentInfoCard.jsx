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
    <div>
      <div className="absolute top-[0px] left-[0px] rounded bg-white w-[365px] h-[145px]" />
      <div className="absolute top-[20px] left-[20px] flex flex-col items-start justify-start gap-[8px]">
        <div className="relative font-medium">{cardHeader}</div>
        <div
          className={`relative text-5xl font-semibold ${
            amount > baseAmount ? 'text-green' : 'text-red'
          }`}
        >
          {formattedAmount}
        </div>
      </div>
      <div
        className={`absolute top-[107px] left-[51px] text-base font-medium ${
          amount > baseAmount ? 'text-green' : 'text-red'
        }`}
      >
        {amountPctChange}%
      </div>
      {amount > baseAmount ? (
        <IconPositivePctChange className="absolute top-[109px] left-[25px] w-5 h-5" />
      ) : (
        <IconNegativePctChange className="absolute top-[109px] left-[25px] w-5 h-5" />
      )}
      <div
        ref={chartRef}
        className="absolute top-[20px] left-[213px] rounded w-[152px] h-[125px] overflow-hidden"
      ></div>
    </div>
  );
};

export default InvestmentInfoCard;
