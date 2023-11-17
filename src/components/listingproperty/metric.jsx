import React from 'react';

const Metric = props => {
  return (
    <div className="flex flex-col">
      <div className="text-zinc-700 text-base font-medium font-['Poppins'] items-center border-b border-dashed">
        {props.metricname}
      </div>
      <div className="text-primaryblue-500 text-2xl font-bold font-['Poppins'] items-center justify-center inline-flex">
        {props.metricvalue}
      </div>
    </div>
  );
};

export default Metric;
