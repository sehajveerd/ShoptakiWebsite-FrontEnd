import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const MonthlyRevenue = () => {
  /**
   * TODO: Get the data from the backend.
   * Temporarily displaying the charts with placeholder data.
   */
  const [data] = useState([
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
    const margin = { top: 70, right: 30, bottom: 40, left: 80 };
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

    const yAxis = d3.axisLeft(yScale).ticks(5);

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

  return (
    <div id="chart-container" className="w-full">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default MonthlyRevenue;
