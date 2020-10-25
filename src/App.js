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
        hint: 'hint',
        word: 'BYTES'
      },
      score: 100
    }
  }

  generateLetterStatuses = () => {
    let letters = {}

    for(let i=65; i<91; i++){
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }

  selectLetter = (letter) => {
    let status = {...this.state.letterStatus}
    status[letter] = true

    this.setState({letterStatus: status}, function(){
      (this.state.solution.word.indexOf(letter) >= 0) ? this.setState({score: this.state.score+5}) : this.setState({score: this.state.score-20})
    })
    
    //dir === "up" ? this.setState({score: this.state.score + 5}) : this.setState({score: this.state.score - 20})
  }

  render() {
    return (
      <div>
          <Score score={this.state.score} />
          <Solution solution={this.state.solution} letters={this.state.letterStatus}  />
          <Letters selectLetter={this.selectLetter} letters={this.state.letterStatus} />
      </div>
    )
  }
}

export default App
