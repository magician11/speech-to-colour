import React from 'react';
import ReactDOM from 'react-dom';
import SpeechToColour from './components/speech-to-colours';

// remove margins
document.body.style.margin = 0;

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<SpeechToColour />, root);
