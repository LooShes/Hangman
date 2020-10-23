import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  constructor(){
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        hint: 'Vol',
        word: 'Lu'
      },
      score: 0
    }
  }

  generateLetterStatuses = () => {
    let letters = {}

    for(let i=65; i<91; i++){
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }

  render() {
    return (
      <div>
          <Score score={this.state.score}/>
          <Solution solution={this.state.solution} />
          <Letters letters={Object.keys(this.state.letterStatus)}/>
      </div>
    )
  }
}

export default App
