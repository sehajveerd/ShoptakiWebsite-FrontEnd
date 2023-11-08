import React from 'react';
import * as d3 from 'd3';

const MonthlyRevenue = () => {
  const margin = { top: 70, right: 30, bottom: 40, left: 80 };
  const width = 710 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Set up the x and y scales

  const x = d3.scaleTime().range([0, width]);

  const y = d3.scaleLinear().range([height, 0]);

  // Create the SVG element and append it to the chart container

  const svg = d3
    .select('#chart-container')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Create a fake dataset

  const dataset = [
    { date: new Date('2022-01-01'), value: 2300 },
    { date: new Date('2022-02-01'), value: 2560 },
    { date: new Date('2022-03-01'), value: 5180 },
    { date: new Date('2022-04-01'), value: 9300 },
    { date: new Date('2022-05-01'), value: 2780 },
    { date: new Date('2022-06-01'), value: 2280 },
    { date: new Date('2022-07-01'), value: 3900 },
    { date: new Date('2022-08-01'), value: 2450 },
    { date: new Date('2022-09-01'), value: 1280 },
    { date: new Date('2022-10-01'), value: 1600 },
    { date: new Date('2022-11-01'), value: 7800 },
    { date: new Date('2022-12-01'), value: 3200 },
  ];

  // Define the x and y domains

  x.domain(d3.extent(dataset, d => d.date));
  y.domain([0, d3.max(dataset, d => d.value)]);

  // Add the x-axis

  svg
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(d3.timeMonth.every(1))
        .tickFormat(d3.timeFormat('%b %Y'))
    );

  // Add the y-axis

  svg.append('g').call(d3.axisLeft(y));

  // Create the line generator

  const line = d3
    .line()
    .x(d => x(d.date))
    .y(d => y(d.value));

  // Add the line path to the SVG element

  svg
    .append('path')
    .datum(dataset)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1)
    .attr('d', line);

  return <div id="chart-container" className="w-full"></div>;
};

export default MonthlyRevenue;

// const initialData = [
//   {
//     month: 'Jan',
//     value: 10934,
//   },
//   {
//     month: 'Feb',
//     value: 76249,
//   },
//   {
//     month: 'Mar',
//     value: 64732,
//   },
//   {
//     month: 'Apr',
//     value: 15362,
//   },
//   {
//     month: 'May',
//     value: 12334,
//   },
//   {
//     month: 'Jun',
//     value: 167534,
//   },
//   {
//     month: 'Jul',
//     value: 10234,
//   },
//   {
//     month: 'Aug',
//     value: 90786,
//   },
//   {
//     month: 'Sep',
//     value: 23094,
//   },
//   {
//     month: 'Oct',
//     value: 56473,
//   },
//   {
//     month: 'Nov',
//     value: 8763,
//   },
//   {
//     month: 'Dec',
//     value: 34567,
//   },
// ];
