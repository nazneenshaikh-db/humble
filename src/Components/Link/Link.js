import React from 'react'
import './Link.css'

function Link(props) {
    return (
        <div >
             <a href="#">{props.name}</a>
        </div>
    )
}

export default Link
