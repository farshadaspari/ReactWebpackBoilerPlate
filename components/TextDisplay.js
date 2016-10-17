import React, { Component } from 'react'

class TextDisplay extends Component{

    render(){
        return (
            <div>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default TextDisplay