import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {
    //component data
    state = {
        //you have to encasulate the component data
        value: 0
    }
    //old way of binding event listener with elements: which is not recommended in modern react
    // constructor(props) {
    //     super(props)
    //     //bind event listener
    //     this.onIncrement = this.onIncrement.bind(this)
    // }
    // onIncrement() {
    //     alert('button is clicked')
    // }
    //Event Listener
    onIncrement = () => {
        //increment value of state 
        // this.state.value = this.state.value + 1
        // console.log("value : ",this.state.value)
        // this.setState(function (prveState) {
        //     console.log('Previous State', prveState)
        //     console.log('state mutation logic goes')
        //     //return immutable object
        //     // return {
        //     //     value: prveState.value + 1
        //     // }
        //     //return Object.assign({}, prveState, { value: prveState.value + 1 })
        //    // let value = prveState.value + 1
        //     return { ...prveState, value: prveState.value + 2 }
        // })
        // this.setState((prveState) => {
        //     return { ...prveState, value: prveState.value + 2 }
        // })
        // this.setState((prveState) => ({ ...prveState, value: prveState.value + 2 }))
        let value = this.state.value + 1;
        this.setState({value})
    }

    render() {
        console.log('inside render ', this.state)
        return <div className="container">
            <h1>Counter Application</h1>
            <h3>Counter : {this.state.value}</h3>
            <button className="btn btn-success"
                onClick={this.onIncrement}>
                increment</button>
        </div>
    }
}



const App = props => <div>
    <Counter />
</div>
ReactDOM.render(<App />, document.getElementById('root'))