import React, { Component } from 'react'
import './css/todo.css'
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
        const nameList = this.state.name.map((name,index) =>(
            <div className="list-item" key={index}>
                {name}
                <button className="delete is-pulled-right" id={index} key={index} onClick={() =>this.removeTodo({index})}></button>
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
