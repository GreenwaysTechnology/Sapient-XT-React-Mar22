import React from 'react'
import ReactDOM from 'react-dom';

//create component using functions
// function Heading() {
//     return <h1>Hello React!</h1>  // here we return ReactElement(type of Object what we return)
// }

//Arrow functions : highly recommended
const Heading = () => <h1>Hello React!</h1> // here we return ReactElement(type of Object what we return)


//Imperative way of calling function : which is not recommened
// ReactDOM.render(Heading(),document.getElementById('root'));

//declarative way of calling function.
ReactDOM.render(<Heading></Heading>, document.getElementById('root'));