import React from 'react'
import './Nutrition.css'
import NutImage from '../../../assets/Experts.png'

function Nutrition() {
    return (
        <div className='nut'>
            <div className="nut__container">
                <div className="nut__textContainer">
                    <h1 className="nut__heading">Meet with Nutrition expert</h1>
                    <p className="nut__para">
                        In the first week of your subscription program, you get to meet a dietician/nutritionist with whom you’ll plan and create your diet chart for next one month, according to your own budget.
                    </p>
                    <button className="nut__button">Start Now</button>
                </div>

                <div className="nut__imageContainer">
                    <img src={NutImage} /> 
                </div>
            </div>  
        </div>
    )
}

export default Nutrition
