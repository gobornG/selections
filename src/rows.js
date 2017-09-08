import React, { Component } from 'react';
import './App.css';

class Rows extends Component {
  constructor(props) {
    super(props);
    this.state= {
      row: this.props.row
    }
  }

  render() {
    return (
      <div id="rows-container">  
        <h1 id="row-opt">{this.state.row}</h1><input id="checkBox" type="checkbox" className="boxes" /><input id="checkBox" type="checkbox" className="boxes" /><input id="checkBox" type="checkbox" className="boxes" />
      </div>
    );
  }
}

export default Rows;