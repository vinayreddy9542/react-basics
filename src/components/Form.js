import React, { Component } from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            comment:'',
            topic:'second'
        }
    }
    handleusernamechange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handlecommentchange = (event) =>{
        this.setState({
            comment:event.target.value
        })
    }
    handledropdownchange = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }
    submithandler = (event) =>{
        alert(`${this.state.username}  ${this.state.topic}  ${this.state.comment}`)
        //event.preventDefault()
    }
    render(){
        return(
            <div>
                Form
                <form onSubmit={this.submithandler}>
                    <div>
                        <label>username</label>
                        <input type='text' value={this.state.username} onChange={this.handleusernamechange}></input>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea type='text' value={this.state.comment} onChange={this.handlecommentchange}></textarea>
                    </div>
                    <div>
                        <label>Dropdown</label>
                        <select value={this.state.topic} onChange={this.handledropdownchange}>
                            <option value='first'>First</option>
                            <option value='second'>Second</option>
                            <option value='third'>Third</option>
                        </select>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default Form