import React, { Component } from 'react';

class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letters)
    }

    render() {
        return (
            <span style={{fontFamily: 'Architects Daughter'}} onClick={this.selectLetter}>
                {this.props.letters}<span> </span>
            </span>
        )
    }
}

export default Letter