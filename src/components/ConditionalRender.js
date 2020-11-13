import React, { Component } from 'react'

class ConditionalRender extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedin:true
        }
    }
    render(){
        if(this.state.isLoggedin){
            return(
                <div>
                    Welcome sai
                </div>
            )
        }
        else{
            return(
                <div>
                    Welcome guest
                </div>
            )
        }
    }
}

export default ConditionalRender