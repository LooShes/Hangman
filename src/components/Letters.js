import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
    render() {
        return (
            <div>
                <div>Available Letters</div>
                {this.props.letters.map(l => {
                    return <Letter letters={l}/>
                })}
            </div>
        );
    }
}

export default Letters;