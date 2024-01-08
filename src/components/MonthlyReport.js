import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';
import DynamicMap from './reports/Map/DynamicMap';
import ReportGrouped from './reports/ReportGrouped';

const MonthlyReport = () => {
    const location = useLocation();
    const [reportData, setReportData] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const reportName = urlParams.get('report');

        const fetchMonthlyReport = async () => {
            //   try {
            //     const response = await axios.get(`https://com/upi/monthly-report/${reportName}`);
            //     setReportData(response.data);
            //   } catch (error) {
            //     console.error('Error fetching report:', error);
            //   }
            setReportData("Loding.....(solve nahi ho raha)")
        };

        if (reportName) {
            fetchMonthlyReport();
        }
    }, [location.search]);

    return (
        <div className='col-md-9 ms-sm-auto mt-4 col-lg-10 px-md-4 border-bottom '>
            <center>
                <h2>Monthly Report</h2>
                {reportData ? (
                    <div>
                        <ReportGrouped />
                    </div>
                ) : (
                    // <p>Loading...</p>
                    <div>
                        <DynamicMap />
                    </div>
                )}
            </center>
        </div>
    );
};

export default MonthlyReport;
