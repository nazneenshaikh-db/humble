import React from 'react'
import './psychological.css'

const psychological = () => {
    return (
        <div className='psychological'>
            <div className='psycho-text'>
                <p className='psycho-heading'>Psychological Help</p>
                <div className='psycho-paraContainer'>
                    <p className='psycho-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, massa et tincidunt porta, arcu massa molestie enim.</p>
                </div>
                <a href="df" className="btn btn-green">Start Now</a>
            </div>
            <div className='psycho-img'>
                <div className="img1"></div>
                <div className="img2"></div>
            </div>
        </div>
    )
}

export default psychological
