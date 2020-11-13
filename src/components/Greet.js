import React from 'react'

//general syntax
/*
function Greet(){
    return <h1>welcome sai baba</h1>
}
*/
//ES6 syntax

const Greet = (props) =>{
    console.log(props)
    return(
        <div>
            <h1>{props.name1} {props.name2}</h1>
            {props.children}
        </div>
    )
}

export default Greet