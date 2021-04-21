import React from 'react'
import './hero.css';

const hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='container-text'>
                    <p className='hero-heading'>Services</p>
                    <p className='hero-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, massa et tincidunt porta, arcu massa molestie enim, ac sollicitudin nunc ante non ligula.</p>
                    <a href="kd" className='btn btn-white'>Join our Community</a>
                </div>
                <div className='container-img'></div>
            </div>
        </div>
    )
}

export default hero
