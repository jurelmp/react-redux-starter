import React from 'react';
import PropTypes from 'prop-types/prop-types';
import * as d3 from 'd3';

class BarChart extends React.Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const w = this.props.width;
    const h = this.props.height;
    const data = this.props.data;
    const svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("margin-left", 100);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d) => d * 10)
      .attr("fill", "green");

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d) => h - (10 * d) - 3);
  }

  render() {
    return <div id={"#" + this.props.id}/>;
  }
}

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  id: PropTypes.string
};

export default BarChart;
