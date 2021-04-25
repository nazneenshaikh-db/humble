import React from 'react'
import './Banner.css'
import banner from '../../../assets/HumbleBanner.png'
import Button from '../../../Components/Button/Button'
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import linkedin from '../../../assets/linkedin.png'
import twitter from '../../../assets/twitter.png'


function Banner() {
    return (
        <div className='banner'>
            <div className="banner__grid">
                <div className="banner__img">
                    <img src={banner} alt=""/>
                </div>

                <div className="banner__text">
                    <h1>REJUVENATE</h1>
                    <h1>REVITALISE</h1>
                    <h1>FIND YOURSELF</h1>
                    <p>From career counselling to relationship counselling, we help you solve your life problems.</p>
                    <div className="banner__text__button">
                        <Button title='Join our Community' />
                    </div>

                    
                    <div className="banner__social">
                        <img src={facebook} alt=""/>
                        <img src={instagram} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={twitter} alt=""/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Banner
