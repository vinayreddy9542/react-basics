import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'hello shiva'
        }
    }

    changemessage(){
        this.setState({
            message:'hello narayana'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changemessage()}>change text</button>
            </div>
        )
    }
}

export default Message