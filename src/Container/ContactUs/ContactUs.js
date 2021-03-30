import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Button from '../../Components/Button/Button';
import './ContactUs.css'

function ContactUs() {
    return (
        <div className='contactUs'>
            <div className="contactUs__left">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam voluptates blanditiis optio voluptatibus repudiandae modi, officiis amet tempore dolorem illum excepturi autem eligendi praesentium. Vero molestias architecto qui ducimus.</p>
                <div className="contactUs__icon">
                    <CallIcon style={{fill: "#13524a"}}/>
                    <h6>+91 9999999999</h6>
                </div>
                <div className="contactUs__icon">
                    <MailIcon style={{fill: "#13524a"}}/>
                    <h6>humbleinfo@gmail.com</h6>
                </div>
            </div>

            <div className="contactUs__right">  
                <h4>Your Name</h4>
                <input type="text" placeholder='Enter your name...' />
                <h4>Your Email</h4>
                <input type="text" placeholder='Enter your email...' />
                <h4>Message</h4>
                <textarea type="text" placeholder='Type your message...' />
                <div className="contactUs__button">
                    <Button title='Send Message' />
                </div>
            </div>
            
        </div>
    )
}

export default ContactUs
