import React, { Component } from 'react'
import Todo from './todo';
import './css/todo.css'

class TodoList extends Component {
    constructor(){
        super();
        this.state={
            todoListCount : 0,
            todoListName : [],
            term:''
        }
        this.saveDataInMap = this.saveDataInMap.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
    }
    saveDataInMap(e){
        e.preventDefault();
        let updatedTodoList = [...this.state.todoListName]
        updatedTodoList.push(this.state.term);
            this.setState({
                todoListCount : this.state.todoListCount + 1
                , todoListName : updatedTodoList
                ,term : ''                
            })
    }
    removeHandler(index){
        let arr = this.state.todoListName.filter((name,i) => {
            return i !== index.index; 
        });
        console.log(arr);
        this.setState({
            todoListName : arr,
            todoListCount : this.state.todoListCount -1
        })
    }
    render() {

        return (
            <div className='wrapper'>
                <div className='card frame'>
                <div className='card-header'>
                    <h4 className='card-header-title header'>
                        You have {this.state.todoListCount} Todos
                    </h4>
                    </div>
                    <div className='list-wrapper'>
                        <Todo todoListName={this.state.todoListName} removeHandler={this.removeHandler}></Todo>
                    </div>
                    <form onSubmit={this.saveDataInMap}>
                        <input 
                        type='text'
                        className='input'
                        placeholder='Enter Item'
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                        />
                        <button className='button' disabled={this.state.term===''?true:false}>Submit</button>
                    </form>
                </div>
            </div>
           
        )
    }
}

export default TodoList
