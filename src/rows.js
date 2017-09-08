import React, { Component } from 'react';

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
        <h1>{this.state.row}</h1>
      </div>
    );
  }
}

export default Rows;