import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component{
    
    constructor(props, context){
        super(props,context);
        this.state = {
            inputText : 'some text'
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
                    placeholder="Farshad"
                    value = {this.state.inputText}
                    onChange = {this.handleChange.bind(this)} />
                <div>
                <TextDisplay text={this.state.inputText} />
                </div>
            </div>
        );
    }
}

export default TextInput