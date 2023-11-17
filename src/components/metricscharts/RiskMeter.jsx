import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const RiskMeter = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 200;
    const height = 200;
    // const margin = { bottom: 150 };
    // const width = 200;
    // const height = 200 + margin.bottom;
    const riskLevel = 75;
    const svg = d3
      .select(svgRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Draw the arc representing the risk level
    const arc = d3
      .arc()
      .innerRadius(80)
      .outerRadius(100)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    svg
      .append('path')
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .attr('d', arc)
      .style('fill', 'orange'); // Adjust the color as needed

    // Add text to indicate the risk level
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height / 2)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .style('font-size', '20px')
      .style('fill', 'black')
      .text(`Risk Level: ${riskLevel}`);
  }, []);
  return (
    <div id="risk-meter">
      <svg ref={svgRef} className="my-10 ml-10"></svg>
    </div>
  );
};

export default RiskMeter;
// {
//   let chart = GaugeChart();

//   chart.setProperties({
//     rotation: rotation,
//     thickness: thickness,
//     arc: arc,
//     ticks: ticks,
//     color_scheme: color_scheme,
//     reverse_color_scheme: true,
//     color_step: color_step,
//     tick_color: "#FFF",
//     needle_color: "#BB345B"
//   });

//   chart.setPercentage(percentage);

//   var svg = chart.draw();

//   yield svg.node();

//   // Resize height of SVG automatically - not strictly necessary.

//   var gauge_element = document.querySelector('.gauge-container'),
//       gauge_object = svg.select('.gauge-container'),
//       props = chart.getProperties(),
//       size = autoHeight(gauge_element);

//   svg.attr("viewBox", [0, 0, chart.getProperties().width, size.h + 2 * props.margin]);
//   gauge_object.attr("transform", `translate(${props.width / 2}, ${-size.y + props.margin})`);

// }
