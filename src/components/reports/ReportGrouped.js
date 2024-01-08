import React from 'react';
import InsightReportLayout from './InsightReportLayout';
import DynamicMap from './Map/DynamicMap';
import Graph from './Graph/Graph';

const ReportGrouped = () => {
  return (
    <InsightReportLayout>
      {{
        lineGraph: <Graph />,
        mapComponent: <DynamicMap />,
        // rectangularBar: <RectangularBar />
      }}
    </InsightReportLayout>
  );
};

export default ReportGrouped;
