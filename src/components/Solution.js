import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    createSolution = () => {
        let solution = []
        {[...this.props.solution.word].map(l => { console.log(this.props.letters["b"])
            return this.props.letters[l] ? solution.push(l) : solution.push('__ ')
         })}
         return solution
    }

    render() {
        console.log(this.createSolution())
        return (
            <div>
                <div>{this.props.solution.hint}</div>
                {Object.entries(this.props.letters).forEach(([key, value]) => {
	                // <Letter letters={l} /> 
                })}
            </div>
        );
    }
}

export default Solution;