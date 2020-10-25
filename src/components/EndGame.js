import React, { Component } from 'react';

class EndGame extends Component {
    divStyle = {
        backgroundColor:'violet',
        border: '1px solid black',
        borderRadius: '5px' 
    }

    render() {
        return (
            <div>
                {this.props.word ? <span style={this.divStyle}>You Win!!!</span> : <div style={this.divStyle}>You are Looser</div>}
            </div>
        );
    }
}

export default EndGame;