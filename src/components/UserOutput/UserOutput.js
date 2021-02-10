import React from 'react'

export default function UserOutput({ username }) {
    return (
        <div>
            <p style={{color:"red"}}>{username}</p>
            <p>text 2</p> 
        </div>
    )
}
