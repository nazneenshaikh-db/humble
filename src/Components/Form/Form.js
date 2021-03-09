import React from 'react'
import './Form.css';
import Button from '../Button/Button';

function form() {
    return (
        <div className="card__side card__side--back card__side--back-1">
        <div class="card__cta">
            <div class="card__price-box">
                <p class="card__price-only">Enter your personal details below to get support.</p>
                <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="Full Name" required></input>
                    <label for="name" class="form__label">Full name</label>
                </div>
                <div className="form__group">
                    <input type="email" class="form__input email-input" id="email" placeholder="Email address" required></input>
                    <label for="email" class="form__label">Email address</label>
                </div>
                <div className="form__group">
                    <input type="phone" minlength="10" class="form__input mobile-input" id="number" placeholder="Mobile number" required></input>
                    <label for="number" class="form__label">Mobile number</label>
                </div>
            </div>
                <Button name="Send" className="button"/>
        </div>
       
    </div>
    )
}

export default form
