import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';

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
                        {/* Display fetched report data */}
                        {/* Modify this part based on the structure of your report data */}
                        <p>Report Content: {reportData}</p>
                        {/* Example: Display fetched content */}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </center>
        </div>
    );
};

export default MonthlyReport;
