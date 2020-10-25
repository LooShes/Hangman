import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
    render() {
        let letters = Object.keys(this.props.letters)

        return (
            <div>
                <div>Available Letters:</div>
                {letters.map(l => {
                    return this.props.letters[l] ? 
                    <span className={[this.props.letters[l]]} style={{textDecoration: "line-through"}}>
                        <Letter letters={l} selectLetter={this.props.selectLetter} /></span> : 
                    <span className={[this.props.letters[l]]}>
                        <Letter letters={l} selectLetter={this.props.selectLetter} /></span>
                })}
            </div>
        );
    }
}

export default Letters