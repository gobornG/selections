import React, { Component } from 'react';
import logo from './logo.svg';
import Rows from './Rows';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="inline" id="options">Options</h1>
          <br />
          <h1 className="inline" id="letters">A</h1>
          <h1 className="inline" id="letters">B</h1>
          <h1 className="inline" id="letters">C</h1>
        </div>
        <div> 
          <Rows row="Option 1" />
          <Rows row="Option 2" />
          <Rows row="Option 3" />
          <Rows row="Option 4" />
          <Rows row="Option 5" />
        </div>
        
      </div>
    );
  }
  
}

export default App;
