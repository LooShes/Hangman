import React, { Component } from 'react';

class Score extends Component {
    render() {
        let score = this.props.score
        return (
            <div>
                {score >= 80 ? <span style={{backgroundColor: "green"}}>{score}</span> : (score<80&&score>=50 ?
                <span style={{backgroundColor: "yellow"}}>{score}</span> : <span style={{backgroundColor: "red"}}>{score}</span>) }
            </div>
        )
    }
}

export default Score;