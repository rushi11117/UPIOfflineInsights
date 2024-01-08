import React from 'react';

const InsightReportLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
        </div>

        <div className="col-md-10">
          <div className="row mb-4">
            <div className="col-md-12">
              {/* <h2 className="text-center mb-3">Insight Report Title</h2> */}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              {children.lineGraph}
            </div>

            <div className="col-md-6 mb-4">
              {children.mapComponent}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              {children.rectangularBar}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightReportLayout;
