import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

//This function is pure function : function gets props as input and return as it is without muation.
const Greeter = props => {
    return <div>
        <h1>Hello {props.name}</h1>
    </div>
}

const App = () => <div>
    <Greeter name="Subramnaian" />
</div>
ReactDOM.render(<App />, document.getElementById('root'))