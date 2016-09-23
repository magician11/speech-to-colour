import React from 'react';
import ReactDOM from 'react-dom';
import SpeechToColour from './components/speech-to-colours';

// remove margins
document.body.style.margin = 0;

ReactDOM.render(<SpeechToColour />, document.getElementById('app'));
