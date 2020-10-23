import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    render() {
        let emptySpaces = ['__', '__', '__', '__']

        return (
            <div>
                <div>Your ideal mood when coding</div>
                {emptySpaces.map((e, i) => { 
                    return <span key={i}>{e}  </span> 
                })}
                {[...this.props.solution.word].map(l => {
                    return <Letter letters={l} />
                })}
                <div>{this.props.solution.hint}</div>
            </div>
        );
    }
}

export default Solution;