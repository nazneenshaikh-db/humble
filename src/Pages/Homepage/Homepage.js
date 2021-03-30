import React from 'react'
import AboutUs from '../../Container/AboutUs/AboutUs';
import Banner from '../../Container/Banner/Banner';
import ContactUs from '../../Container/ContactUs/ContactUs';
import Services from '../../Container/Services/Services';
import Navbar from '../../Container/Navebar/Navbar'
// import Footer from './Container/Footer/Footer';

function HomePage() {
  return (
    <div className="homepage">
        <Navbar/>
        <Banner/>
        <AboutUs/>
        <Services/>
        <ContactUs/>
        {/* <Suggested/> */}
        {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
