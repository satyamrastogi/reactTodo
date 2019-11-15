import React, { Component } from 'react'
import Todo from './todo';

class TodoList extends Component {
    constructor(){
        super();
        this.state={
            todoListCount : 0,
            todoListName : []
        }
        this.saveDataInMap = this.saveDataInMap.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
    }
    saveDataInMap(){
        var todoInput = document.getElementById("todo_input").value;
        let updatedTodoList = this.state.todoListName
        updatedTodoList.push(todoInput);
            this.setState({
                todoListCount : this.state.todoListCount + 1
                , todoListName : updatedTodoList
            })
    }
    removeHandler(index){
        let arr = this.state.todoListName.filter((name,i) => {
            return i != index.index; 
        });
        console.log(arr);
        this.setState({
            todoListName : arr,
            todoListCount : this.state.todoListCount -1
        })
    }
    render() {

        return (
            <div>
                <h2>Count {this.state.todoListCount}</h2>
                <input id="todo_input"></input>
                <button onClick={this.saveDataInMap}>submit</button>
                <Todo todoListName={this.state.todoListName} removeHandler={this.removeHandler}></Todo>
            </div>
        )
    }
}

export default TodoList
