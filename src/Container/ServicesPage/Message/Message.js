import React from 'react'
import msgImage from '../../../assets/Whatsapp-Message-01.png'
import './Message.css'
function Message() {
    return (
        <div className="message">
            <div className="message__container">
                <div className="message__imageContainer">
                    <img src={msgImage} />
                </div>
                <div className="message__textContainer">
                    <h1 className="message__heading">Daily affirmation texts 
                        on WhatsApp/SMS</h1>
                    <p className="message__para">With the subscription program you get the option to get daily customised affirmative texts to start your morning with a positive note. We are there to motivate you always. </p>
                    <button className="message__button">Start Now</button>
                </div>
            </div>            
        </div>
    )
}

export default Message
