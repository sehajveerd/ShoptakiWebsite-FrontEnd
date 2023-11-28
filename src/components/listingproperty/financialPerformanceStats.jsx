import React from 'react';
import PriceorIncomeValue from './pricevalue';
import { styled } from 'styled-components';
// import LinearScale from '../metricscharts/LinearMeter';
// import LinearProgressWithLabel from './riskfactor';

const Title = styled.div`
  border-bottom: 1px dashed var(--neutral-gray-200, #000000);
  --tw-text-opacity: 1;
  color: rgb(63 63 70 / var(--tw-text-opacity));
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
`;

const ColorMeter = styled.div`
  margin-top: 40px;
  width: 67%;
  height: 4px;
  background: linear-gradient(
    to right,
    #99f78a 25%,
    #d0ff15 25% 50%,
    #ffe714 50% 75%,
    #ff0606 75% 100%
  );
`;
// const Meter = styled.div`
//   justify-content: center;
//   align-items: center;
// `;

const PerformanceStats = ({
  title,
  metricValue,
  metricReview,
  firstLabel,
  firstValue,
  secondLabel,
  secondValue,
  resultLabel,
  resultValue,
  description,
}) => {
  return (
    <div>
      <Title className="mt-6 justify-start items-center inline-flex">
        {title}
      </Title>
      <div className="flex flex-row">
        <div className="flex flex-col gap-4">
          <div className="text-sky-800 text-9xl font-bold font-poppins mt-6">
            {metricValue}
          </div>
          <div className="text-black text-base font-normal font-poppins">
            {metricReview}
          </div>
        </div>
        <div className="w-2/3 justify-center items-center">
          <ColorMeter />
          {/* <LinearScale /> */}
          {/* <LinearProgressWithLabel value={100} /> */}
        </div>
      </div>
      <PriceorIncomeValue label={firstLabel} value={firstValue} />
      <PriceorIncomeValue label={secondLabel} value={secondValue} />
      <PriceorIncomeValue label={resultLabel} value={resultValue} />
      <p className="font-poppins text-sm text-zinc-700">{description}</p>
    </div>
  );
};

export default PerformanceStats;
