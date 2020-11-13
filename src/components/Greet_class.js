import React, { Component } from 'react'

class Greet_class extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.name1} {this.props.name2}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Greet_class