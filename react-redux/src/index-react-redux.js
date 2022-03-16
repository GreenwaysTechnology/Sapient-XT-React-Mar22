import { createStore } from "redux";
import React from 'react'
import ReactDOM from "react-dom"
import { connect, Provider } from "react-redux";

//reducer function which represents the biz logic in the application
const initState = {
    value: 20
}
//it is eq to setState in react
const counterReducer = (state = initState, action) => {
    console.log('Previous State => ', state)
    switch (action.type) {
        case 'counter/increment':
            return { ...state, value: state.value + 1 }
        default:
            return state;//default state
    }
}
//create store object
const store = createStore(counterReducer);
/////////////////////////////////////////////////////////////////////////////////////
//mapper function 

// function mapStateToProp(appState){
//   //must return literal object / mapper objectFit: 
//   return {
//       //key:value - key would be React Prop , value would be Redux State
//       counter:appState
//   }
// }
// const mapStateToProp = appState => {
//     return {
//         //key:value - key would be React Prop , value would be Redux State
//         counter: appState
//     }
// }
const mapStateToProp = appState => ({
    //key:value - key would be React Prop , value would be Redux State
    counter: appState
})
/////////////////////////////////////////////////////////////////////////////////////

const Counter = props => {
    console.log(props)

    const onIncrement = () => {
        //sending request
        props.dispatch({ type: 'counter/increment' })
    }

    return <div>
        <h1>Counter App -React-With Redux</h1>
        <h2>Counter : {props.counter.value}</h2>
        <button onClick={onIncrement}>Increment</button>
    </div>
}
//create hoc 
const CounterHOC = connect(mapStateToProp)(Counter)

const App = () => <>
    <Provider store={store}>
        <CounterHOC />
    </Provider>
</>
ReactDOM.render(<App />, document.getElementById('root'))




