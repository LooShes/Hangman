import React, { Component } from 'react';

class EndGame extends Component {
    
    render() {
        return (
            <div>
                {this.props.word ? <span style={{backgroundColor:'violet'}}>You Won!!!</span> : <div>You are Looser</div>}
            </div>
        );
    }
}

export default EndGame;