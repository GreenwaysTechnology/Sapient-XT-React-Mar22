//How to create dom element using React
import React from 'react';
import ReactDOM from 'react-dom';

//declare React element(which represents element)
const Heading = <h1>Hello React!!</h1>

let rootElement = document.getElementById('root')
ReactDOM.render(Heading,rootElement)