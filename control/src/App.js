import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import url from './url.js'

class App extends Component {
  constructor () {
    super();
    this.sendWord = this.sendWord.bind(this);
    this.state = {
      text : "",
      url : ""
    }
  }


  sendWord() {
    fetch(`http://${url.url}/type/${this.state.text}`,{mode: 'no-cors'});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">Send Command</h4>
          <textarea value={this.state.text} onChange={(event) => this.setState({url : event.target.value})}></textarea><br/>
          <button className="button" onClick={this.sendWord} >Send</button>
        </header>

      </div>
    );
  }
}

export default App;
