import React, { Component } from 'react'

class TextDisplay extends Component{

    handleClick(){
        this.props.deleteOneLetter();
    }
    render(){
        return (
            <div>
                <span>{this.props.text}</span>
                <div>
                    <button onClick={this.handleClick.bind(this)}>Backspace</button>
                </div>                
            </div>
        );
    }
}

export default TextDisplay