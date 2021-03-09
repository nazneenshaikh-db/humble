import React from 'react';
import './Card.css';

function Card(props) {
    let iconStyles = {color: '#186e63', fontSize:'75px'}
    return (
        <div className="Card">
            <props.icon style={iconStyles} />
            <h3 className="card_heading">{ props.title }</h3>
                
            <p className="card_text">{ props.content }</p>
       </div>
    )
}

export default Card
