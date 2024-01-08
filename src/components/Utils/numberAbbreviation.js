import React from 'react';

const NumberAbbreviation = ({ value }) => {
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + ' Bn+';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + ' Ml+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + ' K+'
    } else {
      return num.toString();
    }
  };

  return <span>{formatNumber(value)}</span>;
};

export default NumberAbbreviation;
