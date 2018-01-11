import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.sendWord = this.sendWord.bind(this);
    this.state = {
      text : ""
    }
  }

  handleChange(event) {
    console.log(event.target.value)

    this.setState({text: event.target.value});
  } 

  sendWord() {


    fetch(`http://10.0.0.7:5000/type/${this.state.text}`,{mode: 'no-cors'});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">Send Command</h4>
          <textarea value={this.state.text} onChange={this.handleChange}></textarea><br/>
          <button className="button" onClick={this.sendWord} >Send</button>
        </header>

      </div>
    );
  }
}

export default App;
