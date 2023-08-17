// This file contains code for a Pie chart that displays the distribution of investment in different property types in the portfolio page.
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const InvestmentDistributionCard = ({ chartData, totalInvestedAmount }) => {
  const chartColorClasses = [
    'bg-secondaryblue-50',
    'bg-primaryblue-500',
    'bg-secondaryblue-700',
  ];

  const chartColors = ['#ddefff', '#0d65b6', '#064682'];

  const chartRef = useRef(null);

  // Transforms chart data in required format as per the echarts charting library
  const transformData = (chartData, totalInvestedAmount) => {
    return chartData.map((item, index) => ({
      name: item.propertyType,
      value: item.amountInvested,
      investmentPercent: (
        (item.amountInvested / totalInvestedAmount) *
        100
      ).toFixed(2),
      itemStyle: { color: chartColors[index % chartColors.length] },
      colorClass: chartColorClasses[index % chartColorClasses.length],
    }));
  };

  const propertyDistributionData = transformData(
    chartData,
    totalInvestedAmount
  );

  // convert total invested amount float to the formatted string to display
  const formattedTotalInvestedAmount = `$${totalInvestedAmount.toLocaleString()}`;

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: formattedTotalInvestedAmount,
        textAlign: 'middle',
        textVerticalAlign: 'middle',
        top: '50%',
        left: '50%',
        textStyle: {
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: '500',
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['70%', '90%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 1,
          },
          label: {
            show: false,
          },
          data: propertyDistributionData,
        },
      ],
      tooltip: {
        show: true,
        trigger: 'item',
        confine: true,
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

  return (
    <div>
      <div className="px-4 py-2 text-5xl font-semibold text-black">
        Distribution
      </div>
      <div className="box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
      <div className="flex flex-grow justify-center">
        <div ref={chartRef} className="m-3 w-[213px] h-[213px]"></div>
      </div>
      {/* Chart legend showing percentage of total amount invested in different property types */}
      <div className="flex flex-col flex-grow justify-center mx-3 text-sm">
        {propertyDistributionData.map((property, index) => (
          <React.Fragment key={property.name}>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-between">
                <div
                  className={`w-[18px] h-[18px] ${property.colorClass} rounded mr-4`}
                ></div>
                <div className="font-medium">{property.name}</div>
              </div>
              <div className="font-medium text-right">
                {property.investmentPercent}%
              </div>
            </div>
            {index !== propertyDistributionData.length - 1 && (
              <div className="box-border h-px border-t-[1px] border-solid border-neutralgray-200 my-[10px]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InvestmentDistributionCard;
