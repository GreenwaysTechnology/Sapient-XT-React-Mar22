import React from "react";
import ReactDOM from 'react-dom';

const heading = () => {
    return <div>
        <h1>Hello</h1>
        <h2>Sapient</h2>
    </div>
}

//ReactDOM.render(<Heading></Heading>, document.getElementById('root'));
ReactDOM.render(<heading />, document.getElementById('root'));