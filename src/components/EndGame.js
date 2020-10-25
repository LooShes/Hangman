import React, { Component } from 'react';

class EndGame extends Component {
    divStyle = {
        backgroundColor:'violet',
        border: '1px solid black',
        borderRadius: '5px' 
    }

    restartGame = () => {
        this.props.restartGame("City in Israel", "HAIFA")
    }

    render() {
        return (
            <div>
                {this.props.word ? <span style={this.divStyle}>You Won!!!</span> : <div style={this.divStyle}>You are a Loser</div>}
                <button onClick={this.restartGame}>Restart</button>
            </div>
        );
    }
}

export default EndGame;