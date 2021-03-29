import './App.css';
import AboutUs from './Container/AboutUs/AboutUs';
import Banner from './Container/Banner/Banner';
import ContactUs from './Container/ContactUs/ContactUs';
import Services from './Container/Services/Services';

import Suggested from './Container/Suggested/Suggested';
// import Footer from './Container/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Banner/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
      {/* <Suggested/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
