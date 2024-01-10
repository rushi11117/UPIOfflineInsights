import { Routes, Route, useLocation } from 'react-router-dom';
import MonthlyReport from '../components/MonthlyReport';
import ReportsComponent from '../components/reportComponent';
import ReportsGrouped from '../components/reports/ReportsGrouped';

const ReportRoutes = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('report');

  return (
    <Routes>
      <Route path="/" element={name ? <ReportsGrouped name={name} /> : <ReportsComponent />} />
    </Routes>
  );
};

export default ReportRoutes;