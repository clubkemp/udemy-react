import React from 'react'
import './style.css'

export default function UserInput({ defaultUsername, handleInput}) {
    return (
        <div>
            <input value={defaultUsername}type="text" id="input" name="input" onChange={e=>handleInput(e.target.value)}></input>    
        </div>
    )
}
