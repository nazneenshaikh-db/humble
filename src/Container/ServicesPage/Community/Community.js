import React from 'react'
import './Community.css'
import CommunityImage from '../../../assets/Community-Desktop.png'

function Community() {
    return (
            <div className="com">
                <div className="com__container">
                    <div className="com__textContainer">
                        <h1 className="com__heading">COMMUNITY FOR ALL</h1>
                        <p className="com__para">
                        We function in a very efficient way through our constantly interacting and constantly growing virtual community. Diversity of people working towards the same goal. Helping each other.
                        </p>
                        <button className="com__button">Start Now</button>
                    </div>
                    <div className="com__imageContainer"><img src={CommunityImage}/></div>
                </div>
            </div>  
    )
}

export default Community;
