import React from 'react';
import {BarChart} from "../chart";

let data = [12, 5, 6, 6, 9, 10],
  w = 700,
  h = 500;

class Index extends React.Component {
  render() {
    return (
      <BarChart data={data} height={h} width={w} id={"root"}/>
    );
  }
}

export default Index;
