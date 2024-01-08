import React from 'react';
import LineGraph from './LineGraph';
import generateDummyData from '../DummyData';

const Graph = () => {
  // Use generateDummyData function to get dummy transaction data
  const dummyData = generateDummyData();

  return (
    <div>
      {/* <h2>Transaction Line Graph</h2> */}
      <LineGraph data={dummyData} />
    </div>
  );
};

export default Graph;
