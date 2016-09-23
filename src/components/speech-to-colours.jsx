import React, { Component } from 'react';
//import styling from './tag-bar.scss';

class SpeechToColour extends Component {
  constructor() {
    super();
    this.state = {
      currentColour: 'red',
    };
  }

  render() {
    return (
      <h1>{this.state.currentColour}</h1>
    );
  }
}

export default SpeechToColour;
