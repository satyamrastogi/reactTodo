import React, { Component } from 'react'

export class todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.todoListName
        }
    }
    removeTodo(index){
        console.log(index);
        this.props.removeHandler(index);        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ name: nextProps.todoListName });  
      }
    render() {
        console.log(this.props)
        const nameList = this.state.name.map((name,index) =>(
            <div>
                <button id={index} onClick={() =>this.removeTodo({index})}>remove</button>
                <h2>{name}</h2>
            </div>
        ));
        return (
            <div>
                {nameList}
            </div>
        )
    }
}

export default todo
