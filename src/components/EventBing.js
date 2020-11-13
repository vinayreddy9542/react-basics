import React, { Component } from 'react'

class EventBind extends Component{
    constructor(props){
        super()
        this.state={
            message:'initial'
        }
    }
    clickHandler(){
        this.setState({
            message:'final'
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler.bind(this)}>click</button>
            </div>
        )
    }
}

export default EventBind