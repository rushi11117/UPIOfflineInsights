import React from 'react';

const LineGraph = ({ data }) => {
  const dates = data.map(item => item.date);
  const successful = data.map(item => item.successful);
  const pending = data.map(item => item.pending);
  const failed = data.map(item => item.failed);
  const maxSuccessful = Math.max(...successful);
  const maxPending = Math.max(...pending);
  const maxFailed = Math.max(...failed);
  const maxYAxis = Math.max(maxSuccessful, maxPending, maxFailed);

  const width = 400; 
  const height = 500; 

  const yScale = value => (value / maxYAxis) * (height - 100);

  const renderLine = (lineData, color) => {
    let path = `M0,${height - yScale(lineData[0])}`;
    for (let i = 1; i < lineData.length; i++) {
      const xPos = (width / lineData.length) * i;
      const yPos = height - yScale(lineData[i]);
      path += ` L${xPos},${yPos}`;
    }
    return <path d={path} stroke={color} strokeWidth="2" fill="none" />;
  };

  return (
    <div className='border m-3 offset-md-10 col-md-12'>
      <svg width={width} height={height}>
        {renderLine(successful, 'green')}
        {renderLine(pending, 'yellow')}
        {renderLine(failed, 'red')}
        {/* Y-axis */}
        <line x1="50" y1="50" x2="50" y2={height - 50} stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default LineGraph;
