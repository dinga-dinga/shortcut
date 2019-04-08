import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sections from './Sections.js'
import Header from './Header.js'

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Sections />, document.getElementById('root'));

