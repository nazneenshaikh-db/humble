import React from 'react'
import './Partial.css'

function Partial({icons, orientation}) {

    let partial__img = '';
    if (orientation === 'left') {
        partial__img = 'partial__img__left'
    } else {
        partial__img = 'partial__img__right'
    }

    return (
        <div className='partial'>
            <div className={partial__img}>
                <img src={icons} alt=""/>
            </div>
            <div className={orientation}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et</p>
            </div>
        </div>
    )
}

export default Partial
