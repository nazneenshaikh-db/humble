import React from 'react'
import Partial from '../../Components/Partial/Partial'
import aboutUsImage from '../../assets/aboutUs.png'
import dumbbell from '../../assets/dumbbell.png'
import skull from '../../assets/skull.png'
import thumb from '../../assets/thumb.png'
import tick from '../../assets/tick.png'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className='aboutUs'>
            <div className="aboutUs__head">
                <h1 className='aboutUs__heading'>Welcome to Humble</h1>
                <p className='aboutUs__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sint veniam obcaecati ipsa, doloremque dolorum nesciunt quibusdam debitis natus beatae voluptates accusantium explicabo! Quos delectus nesciunt dignissimos voluptatum architecto ipsam.</p>
            </div>
            <div className="aboutUs__grid">
                <div className="aboutUs__grid__elm1">
                    <Partial icons={dumbbell} orientation='right'/>
                </div>

                <div className="aboutUs__grid__elm2">
                    <Partial icons={thumb} orientation='right'/>
                </div>

                <div className="aboutUs__grid__elm3">
                    <Partial icons={tick} orientation='left'/>
                </div>

                <div className="aboutUs__grid__elm4">
                    <Partial icons={skull} orientation='left'/>
                </div>

                <div className="aboutUs__image">
                    <img src={aboutUsImage} alt=""/>
                </div>
            </div>  
        </div>
    )
}

export default AboutUs
