import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    createSolution = () => {
        let solution = []
        let direction = 'down'

        {[...this.props.solution.word].map(l => {
            return this.props.letters[l] ? solution.push(l) : solution.push('_ ')
         })}
        
        return solution
    }

    render() {
        let solution = this.createSolution()

        return (
            <div>
                <div style={{fontFamily: 'Carter One'}}>{this.props.solution.hint}</div>
                {solution.map(elem => {
	                return <Letter letters={elem} /> 
                })}
            </div>
        );
    }
}

export default Solution;