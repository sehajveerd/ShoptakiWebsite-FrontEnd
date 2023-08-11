import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// TODO: get required data as props for the chart
const InvestmentValueChart = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: 'category',
        data: chartData.map(item => item.title), // TEMP: will need to update if the key is changed
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: chartData.map(item => item.value), // TEMP: will need to update if the key is changed,
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#0085ff',
            shadowColor: '#3355de',
            shadowBlur: 25,
            shadowOffsetY: 20,
          },
        },
      ],
      tooltip: {
        show: true,
        valueFormatter: value => `$${value.toLocaleString()}`,
        textStyle: {
          fontFamily: 'Poppins',
        },
      },
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} className="w-full h-full"></div>;
};

export default InvestmentValueChart;
