import './App.scss';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardContainer from './Components/Dashboard/DashboardContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <DashboardContainer/>
    </div>
  );
}

export default App;
