// import HeaderComponent from './components/header';
// import Footer from './components/footer';
// import Sidebar from './components/sidebar';
// import HomeComponent from './components/homeComponent';
// import ChartComponent from './components/chartComponent';
// import Error from './error-handle/error';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import ReportRoutes from './routes/reportsRoutes';
// import IntegrationDocs from './integration/integrationDocs';
// import LocationChart from './components/locationChart';
// import { AuthProvider, useAuth } from './components/Auth0/authContext';
// import LoginPage from './components/Auth0/LoginPage';
// import React from 'react';

// // import Login from './security/loginForm';
// // import { checkLogin } from './components/Utils/loginUtils';


// function App() {
//   const footerRight = {
//     'textAlign': 'left'
//   }

//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <div className="App container-fluid">
//           <div>
//             <div className='sticky-top mb-5'>
//               <HeaderComponent />
//             </div>
//             <div className="container-fluid">
//               <div className="row m-1">
//                 <div className="position-fixed col-md-2 mt-6 overflow-auto">
//                   <Sidebar />
//                 </div>
//                 <div className='col-md-11'>
//                   <Routes>
//                     <Route path="/login" element={<LoginPage />} />
//                     <LoggedInRoutes />
//                     <Route path="*" element={<Error />} />
//                   </Routes>
//                 </div>
//                 {/* <ChartComponent /> */}
//               </div>
//             </div>

//             <div className="d-flex justify-content-end">
//               <div className='col-md-10 '>
//                 <Footer className={footerRight} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };


// function LoggedInRoutes() {
//   const { isloggedIn } = useAuth();

//   return (
//     <React.Fragment>
//       {isloggedIn ? (
//         <>
//           <Route path="transactions" element={<ChartComponent />} />
//           <Route path="UPIOfflineInsights" element={<HomeComponent />} />
//           <Route path="" element={<HomeComponent />} />
//           <Route path="ondc" element={<LocationChart />} />
//           <Route path="/reports/*" element={<ReportRoutes />} />
//           <Route path="integration" element={<IntegrationDocs />} />
//         </>
//       ) : (
//         <Route path='*' element={<Navigate to='login' />} />
//       )}
//     </React.Fragment>
//   );
// }


// export default App;
import HeaderComponent from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import HomeComponent from './components/homeComponent';
import ChartComponent from './components/chartComponent';
import Error from './error-handle/error';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from './components/Theme/ThemeContext';
import ReportRoutes from './routes/reportsRoutes';
import IntegrationDocs from './integration/integrationDocs';
import LocationChart from './components/locationChart';
import DynamicMap from './components/reports/Map/dynamicMap';
import ReportsGrouped from './components/reports/ReportsGrouped';
// import ReportGrouped from './components/reports/ReportGrouped';
// import Login from './security/loginForm';
// import { checkLogin } from './components/Utils/loginUtils';



function App() {

  const footerRight = {
    'textAlign': 'left'
  }


  return (
    // <ThemeProvider>
      <BrowserRouter>
        <div className="App container-fluid">
          <div>
            <div className='sticky-top mb-5'>
              <HeaderComponent />
            </div>
            <div className="container-fluid">
              <div className="row m-1">
                <div className="position-fixed col-md-2 mt-6 overflow-auto">
                  <Sidebar />
                </div>
                <div className='col-md-11'>
                  <Routes>
                    <Route path="transactions" element={<ChartComponent />} />
                    <Route path="UPIOfflineInsights" element={<HomeComponent />} />
                    <Route path="" element={<HomeComponent />} />
                    <Route path="ondc" element={<LocationChart />} />
                    <Route path="/reports/*" element={<ReportRoutes />} />
                    <Route path="integration" element={<IntegrationDocs />} />
                    <Route path="map" element={<ReportsGrouped />} />
                    <Route path="*" element={<Error />} />
                  </Routes>
                </div>
                {/* <ChartComponent /> */}
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <div className='col-md-10 '>
                <Footer className={footerRight} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;