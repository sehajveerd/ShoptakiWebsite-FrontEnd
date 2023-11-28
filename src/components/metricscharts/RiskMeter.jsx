import React from 'react';
// import * as d3 from 'd3';
// import * as V from 'victory';
import GaugeChart from 'react-gauge-chart';

const chartStyle = {
  width: 430,
  height: 230,
  fontFamily: 'Poppins',
};

const RiskMeter = () => {
  return (
    <>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={6}
        arcsLength={[0.16, 0.16, 0.16, 0.16, 0.16, 0.16]}
        colors={[
          '#30AD43',
          '#84BD32',
          '#D1D80F',
          '#FEE114',
          '#FF8888',
          '#FF5656',
        ]}
        percent={0.56}
        arcPadding={0.01}
        style={chartStyle}
        textColor="black"
      />
    </>
  );
};

export default RiskMeter;
