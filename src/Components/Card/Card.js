import React from 'react'
import './Card.css';
import Form from '../Form/Form';
function Card() {
    return (
        <div>
            <div className="card">
                <div className="card__side card__side--front">
                <Form />
                </div>
            </div>
        </div>
    )
}

export default Card
