import React from 'react'
import './Meditation.css'
import MedImage from '../../../assets/Meditation-01.png'

function Meditation() {
    return (
        <div className="med">
            <div className="med__container">
                <div className="med__textContainer">
                    <h1 className="med__heading">Meditation</h1>
                    <p className="med__para">
                        You get 30 days of guided meditation by our meditation instructor. Soothing music and visualisation practices to make your mind function clearly. 
                    </p>
                    <button className="med__button">Start Now</button>
                </div>

                <div className="med__imageContainer">
                    <img src={MedImage} /> 
                </div>
            </div>
        </div>
    )
}

export default Meditation
