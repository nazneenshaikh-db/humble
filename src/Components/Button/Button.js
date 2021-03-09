import React from 'react'
import './Button.css';

function Button(props) {
    return (
        <div>
            <a href="#popup" class="btn btn-white">{props.name}</a>
        </div>
    )
}

export default Button
