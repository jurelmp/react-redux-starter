import React from 'react';
import BarChart from "./BarChart";

let data = [12, 5, 6, 6, 9, 10],
  w = 700,
  h = 500;

const Index = (props) => {
  return <BarChart data={data} height={h} width={w}/>;
};

export default Index;
