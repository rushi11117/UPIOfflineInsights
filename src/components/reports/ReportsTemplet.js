import React from 'react';
// import InsightReportLayout from './InsightReportLayout';
import LineGraph from './LineGraph';
import MapComponent from './MapComponent';
import RectangularBar from './RectangularBar';

const AnalyticsReport = () => {
    return (
        <div>
            {/* <InsightReportLayout> */}
            <div className="row">
                {/* Line Graph */}
                <div className="col-md-6">
                    <LineGraph />
                </div>

                {/* Map Component */}
                <div className="col-md-6">
                    <MapComponent />
                </div>
            </div>

            <div className="row">
                {/* Rectangular Bar */}
                <div className="col-md-12">
                    <RectangularBar />
                </div>
            </div>
        </div>
        // </InsightReportLayout >
    );
};

export default AnalyticsReport;
