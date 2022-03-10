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
            <h1>Counter Application</h1>
            <h3>Counter : {this.state.value}</h3>
            <button className="btn btn-success"
                onClick={this.onIncrement}>
                increment</button>
            {/* inline event handler */}
            <button style={{ margin: 5 }} className="btn btn-success"
                onClick={() => {
                    this.setState((prevState) => ({ ...prevState, value: prevState.value - 1 }))
                }}>
                decrement</button>

        </div>
    }
}
//presentational component



const App = props => <div>
    <Counter />
</div>
ReactDOM.render(<App />, document.getElementById('root'))