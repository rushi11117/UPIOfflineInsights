import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Chart from './components/chart'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Header />
        </div>
        <div class="container">
          <div class="col">
            <div class='row'>
              <Sidebar />
            </div>
            <div class="row">
              <Chart />
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
