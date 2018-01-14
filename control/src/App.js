import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import url from './url.js'

class App extends Component {
  constructor () {
    super();
    this.sendWord = this.sendWord.bind(this);
    this.sendKey = this.sendKey.bind(this);
    this.state = {
      word : "",
      key : "",
      wordLeng : 0

    }
  }

  sendWord() {
    fetch(`http://${url.url}/type/${this.state.word}`,{mode: 'no-cors'});
  }

  sendKey (event) {
    let word = event.target.value
    let wordLeng = word.length
    if(this.state.wordLeng < wordLeng){
      fetch(`http://${url.url}/key/${word[wordLeng - 1]}`,{mode: 'no-cors'});
    }else {
      fetch(`http://${url.url}/key/BackSpace`,{mode: 'no-cors'});
    }
    this.setState({ word : word, wordLeng : wordLeng })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">Send Command {this.state.key}</h4>
          <textarea value={this.state.word} onChange={this.sendKey}></textarea><br/>
          <button className="button" onClick={this.sendWord} >Send</button>
        </header>

      </div>
    );
  }
}

export default App;
