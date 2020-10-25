import React, { Component } from 'react';

class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letters, 'up')
    }

    render() {
        return (
            <span onClick={this.selectLetter}>
                {this.props.letters}
            </span>
        )
    }
}

export default Letter