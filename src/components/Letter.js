import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
            <span>
                {this.props.letters}
            </span>
        )
    }
}

export default Letter