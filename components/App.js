import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component{
    render(){
        return (
            <div>
                <div>Farshad's ReactBoilerplate!</div>
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}

export default App