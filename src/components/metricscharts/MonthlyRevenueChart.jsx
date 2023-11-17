import React from 'react';
// import * as d3 from 'd3';
import * as V from 'victory';

const MonthlyRevenue = props => {
  /**
   * TODO: Get the data from the backend.
   * Temporarily displaying the charts with placeholder data.
   */
  const data = [
    { date: new Date('2022-01-01'), value: 2300 },
    { date: new Date('2022-02-01'), value: 2560 },
    { date: new Date('2022-03-01'), value: 5180 },
    { date: new Date('2022-04-01'), value: 6300 },
    { date: new Date('2022-05-01'), value: 2780 },
    { date: new Date('2022-06-01'), value: 2280 },
    { date: new Date('2022-07-01'), value: 3900 },
    { date: new Date('2022-08-01'), value: 2450 },
    { date: new Date('2022-09-01'), value: 1280 },
    { date: new Date('2022-10-01'), value: 1600 },
    { date: new Date('2022-11-01'), value: 7800 },
    { date: new Date('2022-12-01'), value: 3200 },
  ];

  return (
    <div className="my-14">
      <div className="flex flex-row w-full justify-between mb-8">
        <p className="text-zinc-700 text-base font-medium font-poppins border-b border-dashed">
          {props.chartname}
        </p>
        <p className="text-sm font-poppins text-zinc-700 font-normal">
          Average:
          <span className="text-primaryblue-500 mx-auto">${props.Average}</span>
        </p>
        <p className="text-sm font-poppins text-zinc-700 font-normal">
          Minimum:
          <span className="text-primaryblue-500 mx-auto">${props.Minimum}</span>
        </p>
        <p className="text-sm font-poppins text-zinc-700 font-normal">
          Maximum:
          <span className="text-primaryblue-500 mx-auto">${props.Maximum}</span>
        </p>
      </div>
      <V.VictoryChart domainPadding={25} padding={{ left: 60, bottom: 60 }}>
        <V.VictoryAxis
          className="ml-10"
          tickFormat={x => x.toLocaleString('default', { month: 'short' })}
          tickValues={data.map(d => d.date)}
          style={{
            tickLabels: {
              fontFamily: 'Poppins',
              fontSize: '12',
              fill: '#747474',
            },
            axis: { stroke: 'transparent' },
          }}
        />
        <V.VictoryAxis
          className="ml-10"
          dependentAxis
          tickFormat={x => `$${x}-`}
          style={{
            grid: { stroke: 'rgba(0,0,0,0.1)' },
            tickLabels: {
              fontFamily: 'Poppins',
              fontSize: '12',
              fill: '#747474',
            },
            axis: { stroke: 'transparent' },
          }}
        />
        <V.VictoryLine
          data={data}
          x="date"
          y="value"
          style={{
            data: {
              stroke: '#0D65B6',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
          }}
          interpolation="natural"
        />
      </V.VictoryChart>
      {/* <div id="chart-container" className="w-full">
        <svg ref={svgRef}></svg>
      </div> */}
    </div>
  );
};

export default MonthlyRevenue;

// Commented the d3 graph code, As Victory Charts are easier to understand and integrate.
/* const [data] = useState([
    { date: new Date('2022-01-01'), value: 2300 },
    { date: new Date('2022-02-01'), value: 2560 },
    { date: new Date('2022-03-01'), value: 5180 },
    { date: new Date('2022-04-01'), value: 6300 },
    { date: new Date('2022-05-01'), value: 2780 },
    { date: new Date('2022-06-01'), value: 2280 },
    { date: new Date('2022-07-01'), value: 3900 },
    { date: new Date('2022-08-01'), value: 2450 },
    { date: new Date('2022-09-01'), value: 1280 },
    { date: new Date('2022-10-01'), value: 1600 },
    { date: new Date('2022-11-01'), value: 7800 },
    { date: new Date('2022-12-01'), value: 3200 },
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 40, right: 30, bottom: 10, left: 80 };
    const width = 710 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .style('background', '#ffffff')
      .style('overflow', 'visible')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const numLines = 5;
    // Setting the scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice(numLines)
      .range([height, 0]);

    // background lines for each tick on y-axis of the chart
    for (let i = 0; i < numLines; i++) {
      const yValue = yScale.ticks(numLines)[i];
      svg
        .append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', yScale(yValue))
        .attr('y2', yScale(yValue))
        .attr('stroke', '#ccc') // Color of the grid lines
        .attr('stroke-width', 1);
    }

    // Create the line generator
    const generateScaledLine = d3
      .line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value))
      .curve(d3.curveBasis);

    // setting up the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeMonth.every(1))
      .tickFormat(d => {
        // Extract the last two digits of the year
        const year = d.getFullYear().toString().slice(-2);
        return d3.timeFormat('%b')(d) + ' ' + year;
      });

    const yAxis = d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('$,d'));

    // Placing the axes on to the svg and Hiding the axes lines
    const xAxisGroup = svg
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height})`);
    xAxisGroup.select('.domain').remove(); // This removes the x-axis line

    const yAxisGroup = svg.append('g').call(yAxis);
    yAxisGroup.select('.domain').remove(); // This removes the y-axis line

    // Apply font family and font size to x-axis tick labels
    xAxisGroup
      .selectAll('.tick text')
      .style('font-family', 'Poppins')
      .style('font-size', '12px')
      .style('color', '#747474');

    // Apply font family and font size to y-axis tick labels
    yAxisGroup
      .selectAll('.tick text')
      .style('font-family', 'Poppins')
      .style('font-size', '12px')
      .style('color', '#747474');

    // setting up the data for the svg
    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('d', d => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', '#0D65B6')
      .attr('stroke-width', '3');
  }, [data]);
*/
