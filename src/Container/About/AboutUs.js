import React from 'react'
import Header from '../../Components/Header/Header';
import './AboutUs.css'
function AboutUs() {
    return (
        <div>
            <Header />
            <div className="aboutUs">
                <hr style={{borderColor: "#838383", opacity:"0.3"}}></hr>
                <div className="content">
                    <p className="textType1" style={{lineHeight:"0.9" }}>WE<b><br />make <br />stuff.</b></p>
                </div>
                <div className="content">
                    <p className="textType2">Beautiful, practical, meaningful stuff.<br/>
                    We make what we love.<br/>
                    we ❤️ what we do.</p>
                </div>
                <div className="content">
                    <p className="textType2">But over the years, we noticed that somehow, along the way
                    , software designed to help us be creative actually made us less creative. That's 
                    because we believe our best ideas emerge when we use pencils and paper.</p>
                </div>
                <div className="content">
                    <p className="textType1"><b>So we set out to build tools that work the way we do.</b></p>
                </div>
                <div className="content">
                    <p className="textType2">Tools for the creative space - The 53 centimerers that magically link head,heart,and
                    hand. Tools as simple as pencil and paper. Tools so essential,we really can't imagine work
                    without them.</p>
                </div>
                <div className="content">
                    <p className="textType1" style={{lineHeight:"0.95"}}>FOR <br/>
                    <b>THE MAKERS, <br/>
                    THE CREATORS, <br/>
                    THE DISCOVERERS, <br/>
                    THE ORIGINAL THINKERS.</b></p>
                </div>
                <p style={{fontSize:"18px", fontWeight:500, marginTop:"30px", marginBottom:"30px"}}>FifityThree is the space to create.</p>
            </div>
        </div>
    )
}

export default AboutUs
