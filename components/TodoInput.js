import React, { Component } from 'react'

class TodoInput extends Component{
    
    constructor(props, context){
        super(props,context);
        this.state = {
            inputText : '...'
        };
    }

    handleChange(event){
        var self = this;
        this.setState({ 
            inputText: event.target.value
        });
    };

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Nothing to do!"
                    value = {this.state.inputText}
                    onChange = {this.handleChange.bind(this)} />
                <div>
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}

export default TodoInput