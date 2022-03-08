import React from "react";
import ReactDOM from 'react-dom';

/**
 * React.Component is the base class in order to create Components
 */

class Heading extends React.Component {
    render() {
        return <h1>Hello React</h1>
    }
}

ReactDOM.render(<Heading></Heading>, document.getElementById('root'));