import React, { Component } from 'react';
import annyang from 'annyang';

import mainStyles from '../styling/main.scss';

class SpeechToColour extends Component {
  constructor() {
    super();

    const commands = {
      'show me *colour': this.changeColour.bind(this),
    };

    annyang.addCommands(commands);

    this.state = {
      colour: 'white',
    };

    annyang.start();
  }

  changeColour(colourStr) {
    this.setState({ colour: colourStr.replace(/ /g, '') });
    console.log(colourStr);
  }

  render() {
    const styling = {
      backgroundColor: this.state.colour,
    };

    return (
      <div style={styling} className={mainStyles['speech-to-colour']}>
        <h1>{this.state.colour}</h1>
      </div>
    );
  }
}

export default SpeechToColour;
