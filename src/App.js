import React, { Component } from 'react';
import logo from './logo.svg';
import Rows from './Rows';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Options</h2>
          <br />
          <h2>A</h2>
          <h2>B</h2>
          <h2>C</h2>
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
