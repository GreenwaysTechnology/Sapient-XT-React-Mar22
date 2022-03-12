import React, { useState } from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    state = {
        value: 0,
        text: 'default',
        isLoaded: false
    }
    onIncrement = evt => {
        this.setState(prevState => ({ ...prevState, value: prevState.value + 1 }))
    }
    onLoading = evt => {
        this.setState(prevState => ({ ...prevState, isLoaded: !prevState.isLoaded }))
    }
    render() {
        console.log("Current State => ", this.state)
        return <div>
            <h1>Value : {this.state.value}</h1>
            <h2>Loading : {this.state.isLoaded ? "Loading" : "Not Loading"}</h2>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={this.onLoading}>Loading</button>
        </div>
    }
}
const MyCounter = props => {
    //state 
    const [value, setValue] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // function onIncrement() {
    //     //logic
    //     // setValue(preValue => {
    //     //     console.log(`PreValue ${preValue}`)
    //     //     return preValue + 1 // behind this hook returns object only - immutable object
    //     // })
    //     // setValue(preValue => preValue + 1)
    //     setValue(value + 1)
    // }
    const onIncrement = evt => setValue(value + 1)
    console.log('...............................................')
    console.log(`Current State => value: ${value}, isLoaded: ${isLoaded}`)
    return <div>

        <h1>Value : {value}</h1>
        <h2>Loading : {isLoaded ? "Loading" : "Not Loading"}</h2>

        <button onClick={onIncrement}>+</button>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setIsLoaded(!isLoaded)}>Loading</button>

    </div>
}


const App = props => <div>
    <h1>Class Component</h1>
    <Counter />
    <hr />
    <h1>Functonal Component-Hook</h1>
    <MyCounter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))
