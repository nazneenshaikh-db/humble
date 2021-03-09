import './Contact.css';
import image from '../../assets/contact.png';
import Card from '../../Components/Card/Card';

function Contact() {
  return (
    <div className="contact">
      <div className="heading">
        <h1 className="title">Humble</h1>
        <p className="tagline">We are always there for you.</p>
      </div>
      <div className="content">
        <img src={image} className="img"></img>
        <Card  />
      </div>
    </div>
    
  );
}

export default Contact;
