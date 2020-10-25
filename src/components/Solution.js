import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    createSolution = () => {
        let solution = []
        {[...this.props.solution.word].map(l => {
            return this.props.letters[l] ? solution.push(l) : solution.push('__ ')
         })}
         return solution
    }

    render() {
        let solution = this.createSolution()

        return (
            <div>
                <div>{this.props.solution.hint}</div>
                {solution.map(elem => {
	                return <Letter letters={elem} /> 
                })}
            </div>
        );
    }
}

export default Solution;