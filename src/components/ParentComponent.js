import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'parent'
        }
        this.greetparent = this.greetparent.bind(this)
    }
    greetparent(childmessage){
        alert(`Hello ${this.state.message} from ${childmessage}`)
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetparent}/>
            </div>
        )
    }
}

export default ParentComponent