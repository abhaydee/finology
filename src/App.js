import "./App.scss";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import BrandsContainer from "./Components/Brands/BrandsContainer";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import People from "./Components/People/People";
import Service from "./Components/Service/Service";
function App() {
  return (
    <div className="App">
      <Header />
      <DashboardContainer />
      <Service />
      <People />
      <BrandsContainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
