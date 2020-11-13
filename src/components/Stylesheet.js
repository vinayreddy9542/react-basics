import React from 'react'
import './mystyles.css'
function Stylesheet(props){
    let cn = props.primary?'primary':''
    return(
        <div>
            <h2 className={`${cn} font-xl`}>styles sheet</h2>
        </div>
    )
}

export default Stylesheet