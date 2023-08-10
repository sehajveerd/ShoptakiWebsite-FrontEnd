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
      <div
        ref={chartRef}
        className="absolute top-[72px] left-[16px] w-[213px] h-[213px]"
      ></div>
      <div className="absolute top-[163px] left-[82px] font-medium text-right">
        {formattedTotalInvestedAmount}
      </div>
      <div className="absolute top-[16px] left-[16px] text-5xl font-semibold text-black">
        Distribution
      </div>
      {/* Chart legend showing percentage of total amount invested in different property types */}
      <div className="relative top-[295px] left-[16px] w-[190px] h-[auto] text-sm">
        {propertyDistributionData.map((property, index) => (
          <React.Fragment key={property.name}>
            <div className="relative w-[190px] h-[21px] ">
              <div
                className={`absolute top-[0px] left-[0px] rounded ${property.colorClass} w-[18px] h-[18px]`}
              ></div>
              <div className="absolute top-[0px] left-[34px] font-medium">
                {property.name}
              </div>
              <div className="absolute top-[0px] left-[160px] font-medium text-right">
                {property.investmentPercent}%
              </div>
            </div>
            {index !== propertyDistributionData.length - 1 && (
              <div className="relative left-[-0.5px] box-border w-[191px] h-px border-t-[1px] border-solid border-neutralgray-200 my-[10px]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="absolute top-[55.5px] left-[-0.5px] box-border w-[245px] h-px border-t-[1px] border-solid border-gainsboro-100" />
    </div>
  );
};

export default InvestmentDistributionCard;
