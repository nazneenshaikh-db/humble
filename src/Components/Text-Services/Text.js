import React from 'react'
import './Text.css';
import Button from '../Button-services/Button';

function Text() {
    return (
        <div className="App">
         <div className="heading">
        <h1 className="title">Our Services are Our Superpower</h1>
      </div>
      <div className="para">
        <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <div className="button">
          <Button name="Know More &#8594;" />
          </div>
      </div>
        </div>
    )
}

export default Text
