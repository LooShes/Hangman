import React, { Component } from 'react';
import './App.css';
import pic from './img/hangman.PNG'
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

class App extends Component {
  constructor(){
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        hint: "3*10^8 m/s",
        word: "SPEED OF LIGHT"
      },
      score: 100,
      gameNumber: -1
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
  }

  endGame = (letter) => {
    for(let letter of this.state.solution.word){
      if(!this.state.letterStatus[letter]){
        return false
      }
    }
   return  this.state.score>0 ? true : false
  }

  restartGame = () => {
    const hints = ["City in Israel", "Something", 'Best mood when coding']
    const words = ["HAIFA", "ANYTHING", 'CALM']

    this.setState({gameNumber: this.state.gameNumber+1}, function(){
      this.setState({solution: {hint: hints[this.state.gameNumber], word: words[this.state.gameNumber]}})
      this.setState({letterStatus: this.generateLetterStatuses()})
    })
  }

  render() {
    console.log(this.endGame())
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} alt="hangman.png" className="App-logo" style={{}} /><br/>
          <Score score={this.state.score} />
          <Solution solution={this.state.solution} letters={this.state.letterStatus}  />
          <Letters selectLetter={this.selectLetter} letters={this.state.letterStatus} />
          {this.endGame() ? <EndGame word={this.state.solution.word} restartGame={this.restartGame} /> : <EndGame restartGame={this.restartGame} />}
        </header>
      </div>
    )
  }
}

export default App
