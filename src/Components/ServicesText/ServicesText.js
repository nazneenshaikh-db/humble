import React from 'react'
import './ServicesText.css';
import Button from '../Button/Button';

function Text() {
    return (
        <div className="service__text">
         <div className="service__text__heading">
        <h1>Our Services are Our Superpower</h1>
      </div>
      <div className="service__text__para">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <div className="service__text__button">
          <Button title="Know More" />
          </div>
      </div>
        </div>
    )
}

export default Text
