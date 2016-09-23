import React, { Component } from 'react';
import annyang from 'annyang';

import mainStyles from '../styling/main.scss';

class SpeechToColour extends Component {
  constructor() {
    super();

    const commands = {
      'show me *colour': this.changeColour.bind(this),
    };

    if (annyang) {
      annyang.addCommands(commands);
      annyang.start();
      this.state = {
        colour: 'blue',
        error: '',
      };
    } else {
      this.state = {
        error: 'This browser does not support speech recognition. Try using Google Chrome.',
      };
    }
  }

  changeColour(colourStr) {
    this.setState({ colour: colourStr.replace(/ /g, '') });
  }

  render() {
    const styling = {
      backgroundColor: this.state.colour,
    };

    let content;
    if (!this.state.error) {
      content = (
        <div className={mainStyles.information}>
          <p>To see a colour, simply say "show me red" or whatever colour you want to see!</p>
          <h1>current colour: {this.state.colour}</h1>
        </div>
      );
    } else {
      content = <h1>{this.state.error}</h1>;
    }

    return (
      <div style={styling} className={mainStyles['speech-to-colour']}>
        {content}
      </div>
    );
  }
}

export default SpeechToColour;
