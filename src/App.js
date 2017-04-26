//TOUT CE QUI EST ENTRE {} DANS REACT CORRESPOND A DU CODE JS

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button' ;
import {textButton} from './test.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text={textButton} onClick={this.majState}/>
      </div>
    );
  }
}

export default App;
