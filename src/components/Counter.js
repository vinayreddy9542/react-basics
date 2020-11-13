import React, { Component } from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment(){
        this.setState({
            count : this.state.count+1 
        })
    }

    render(){
        return (
            <div>
                <p>count : {this.state.count}</p>
                <button onClick={() => this.increment()}>increase</button>
            </div>
        )
    }
}

export default Counter