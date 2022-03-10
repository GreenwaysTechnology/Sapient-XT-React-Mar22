import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


//container component
class Counter extends Component {
    state = {
        value: 0
    }
    onIncrement = () => {
        this.setState((prevState) => ({ ...prevState, value: prevState.value + 1 }))
    }
    render() {
        return <div className="container">
            {/* Pass state as prop: dynamic props and also passing function as prop */}
            <CounterDisplay value={this.state.value} onIncrement={this.onIncrement} />

        </div>
    }
}
//presentational component

const CounterDisplay = props => <div>
    <h1>Counter Application</h1>
    <h3>Counter : {props.value}</h3>
    <button className="btn btn-success"
        onClick={props.onIncrement}>
        increment</button>
</div>


const App = props => <div>
    <Counter />
</div>
ReactDOM.render(<App />, document.getElementById('root'))