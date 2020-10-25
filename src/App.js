import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  constructor(){
    super()
    this.state = {
      letterStatus: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: true,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: true,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: true,
        Z: false
      },
      solution: {
        hint: 'hint',
        word: 'BYTES'
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
    console.log(this.state.letterStatus)
    return (
      <div>
          <Score score={this.state.score}/>
          <Solution solution={this.state.solution} letters={this.state.letterStatus} />
          <Letters letters={this.state.letterStatus} />
      </div>
    )
  }
}

export default App
