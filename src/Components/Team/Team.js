import React from 'react'
import './Team.css'
function Team(props) {
    return (
        <div>
            <p className="Team-members">{props.name}</p>
        </div>
    )
}

export default Team
