import React, { Component } from 'react'

function ChildComponent(props) {
    return(
        <div>
            <button onClick={() => props.greetHandler('sai')}>greet parent</button>
        </div>
    )
}

export default ChildComponent