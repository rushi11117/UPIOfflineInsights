import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import homeComponent from './components/homeComponent'
import reports from './components/reports'
import dynamicTable from './components/dynamicTable'
import ChartComponent from './components/chartComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter >
      <div className="App">
        <div>
          <div>
            <Header />
          </div>
          <div className="container-fluid">
            <div className="row mt-4 bg-light">
              <Sidebar />
              <Routes>
                <Route path='/transactions'  exact Component={ChartComponent} />
                <Route path='/home' exact Component={homeComponent}/>
                <Route path='/reports' exact Component={reports}/>
                <Route path='/dynamic' exact Component={dynamicTable}/>
              </Routes>
              {/* <ChartComponent /> */}
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
