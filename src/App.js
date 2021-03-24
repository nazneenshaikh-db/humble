import './App.css';
import AboutUs from './Container/AboutUs/AboutUs';
import Banner from './Container/Banner/Banner';
import Services from './Container/Services/Services';
// import Footer from './Container/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Banner/>
      <AboutUs/>
      <Services/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
