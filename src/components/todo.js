import React, { Component } from 'react'

export class todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.todoListName
        }
    }
    removeTodoHandler(index){
        this.props.removeHandler(index);        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ name: nextProps.todoListName });  
      }
    getNameListOfTodos(){
        const nameListOfTodos = this.state.name.map((name,index) =>(
            <div>
                <button id={index} onClick={() =>this.removeTodoHandler({index})}>remove</button>
                <h2>{name}</h2>
            </div>
        ));
        return nameListOfTodos;
    }
    render() {
        const nameList = this.getNameListOfTodos();
        return (
            <div>{nameList}</div>
        )
    }
}

export default todo
