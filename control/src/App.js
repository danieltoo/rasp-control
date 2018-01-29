import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import url from './url.js'

const  specialCharacters = {
  10 : "KP_Enter",
  32 : "space",
  35 : "numbersign",
  47 : "slash"
}
          

class App extends Component {
  constructor () {
    super();
    this.sendKey = this.sendKey.bind(this);
    this.state = {
      word : "",
      key : "",
      wordLeng : 0
    }
  }

  sendKey (event) {
    let word = event.target.value
    let wordLeng = word.length
    let key = word[wordLeng - 1]
    if(this.state.wordLeng < wordLeng){
      let keyCode = key.charCodeAt(0)
      this.setState({key : keyCode})
      if (!((keyCode >= 65 && keyCode <= 90) ||  (keyCode >= 97 && keyCode <= 122))){
        key = specialCharacters[key.charCodeAt(0)]
      }
      fetch(`http://${url.url}/key/${key}`,{mode: 'no-cors'});
    }else {
      fetch(`http://${url.url}/key/BackSpace`,{mode: 'no-cors'});
    }
    this.setState({ word : word, wordLeng : wordLeng })
  }

  mouseTop () {
    fetch(`http://${url.url}/mousemove_relative/0/30`,{mode: 'no-cors'});
  }
  mouseBottom () {
    fetch(`http://${url.url}/mousemove_relative/180/30`,{mode: 'no-cors'});
  }
  mouseLeft () {
    fetch(`http://${url.url}/mousemove_relative/270/30`,{mode: 'no-cors'});
  }
  mouseRigth () {
    fetch(`http://${url.url}/mousemove_relative/90/30`,{mode: 'no-cors'});
  }

  clickLeft () {
    fetch(`http://${url.url}/click/1`,{mode: 'no-cors'});
  }

  clickRigth () {
    fetch(`http://${url.url}/click/3`,{mode: 'no-cors'});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">Send Command {this.state.key}</h4>
          <textarea value={this.state.word} onChange={this.sendKey}></textarea><br/>
          <button className="button" onMouseOver={this.mouseTop}>UP</button><br/>
          <button className="button" onClick={this.mouseLeft} >LEFT</button>
          <button className="button" onClick={this.mouseRigth} >RIGTH</button><br/>
          <button className="button" onClick={this.mouseBottom} >DOWN</button><br/><br/>
          <button className="button" onClick={this.clickLeft} >Left</button>
          <button className="button" onClick={this.clickRigth} >Rigth</button>
        </header>

      </div>
    );
  }
}

export default App;
