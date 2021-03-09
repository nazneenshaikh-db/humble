import './Footer.css';
import Link from '../../Components/Link/Link';
import Social from '../../Components/Social/Social';
import Team from '../../Components/Team/Team';


function Footer() {
  
  return (
    <div className="App">
        <div className="upper">
            <div className="about_us">
                    <h1 className="about-us">
                    About Us
                    </h1>
                    <p className="about-us-info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur minus porro nam molestias accusamus laudantium non veniam, quibusdam error! Molestiae.
                    </p>
            </div>
            <div className="Team">
                <h1>Our Team</h1>
                    <Team name="Ved" />
                    <Team name="Vibhor" />
                    <Team name="Sarthak" />

            </div>
            <div className="Links">
                    <h1>Links</h1>
                    <Link name="Home" />
                    <Link name="Features" />
                    <Link name="How it Works" />
                    <Link name="Our Clients" />
            </div>
        </div>
        <div className="lower">

            <div className="social-icons">
                <Social />
            </div>
        </div>
    
    </div>

  );
}

export default Footer;
