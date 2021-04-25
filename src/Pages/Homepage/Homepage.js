import React from 'react'
import AboutUs from '../../Container/HomePage/AboutUs/AboutUs';
import Banner from '../../Container/HomePage/Banner/Banner';
import ContactUs from '../../Container/HomePage/ContactUs/ContactUs';
import Services from '../../Container/HomePage/Services/Services';
// import Navbar from '../../Container/Navebar/Navbar'
import NavbarDesktop from '../../Container/NavbarDesktop/NavbarDesktop';
import NavbarMobile from '../../Container/NavebarMobile/NavbarMobile';
import Psychological from '../../Container/ServicesPage/Psychological/psychological'
import Community from '../../Container/ServicesPage/Community/Community'
import Footer from '../../Container/Footer/Footer';

function HomePage() {

  function detectMob() {
    return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 800 ) );
  }

  console.log(detectMob())

  function navbar() {
    if (detectMob())
      return <NavbarMobile/>
    else
      return <NavbarDesktop/>
  }

  return (
    <div className="homepage">
        {navbar()}
        <Banner/>
        <AboutUs/>
        <Services/>
        <Psychological/>
        <ContactUs/>
        <Community/>        
        {/* <Suggested/> */}
        <Footer/>
    </div>
  );
}

export default HomePage;
