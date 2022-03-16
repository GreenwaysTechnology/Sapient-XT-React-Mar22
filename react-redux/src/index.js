import { createStore, combineReducers } from "redux";
import React from 'react'
import ReactDOM from "react-dom"
import { Provider, useSelector, useDispatch } from "react-redux";

//actions constants
const INCREMENT = 'counter/increment'
const INCRMENTBYAMOUNT = 'counter/incrementByAmount'

//action creator without input
const incrementByOne = () => ({
    type: INCREMENT,
    payload: undefined
})
//action creator with input

const incrementByValue = payload => ({
    type: INCRMENTBYAMOUNT,
    payload
})

const initState = {
    value: 20
}
const IncrementReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 }
        default:
            return state;//default state
    }
}

const IncrementByAmountReducer = (state = initState, action) => {
    switch (action.type) {
        case INCRMENTBYAMOUNT:
            return { ...state, value: state.value + action.payload }
        default:
            return state;//default state
    }
}

// const reducerConfig = {
//     IncrementReducer: IncrementReducer,
//     IncrementByAmountReducer: IncrementByAmountReducer
// }
// const reducerConfig = {
//     IncrementReducer,
//     IncrementByAmountReducer
// }
// combineReducers(reducerConfig)
const rootReducer = combineReducers({ IncrementReducer, IncrementByAmountReducer })
//create store object
const store = createStore(rootReducer);

const Heading = props => <header>
    {props.title} {props.children}
</header>


const CounterIncrement = props => {
    //get data like "appstate.reducerName.yourstate"
    const value = useSelector(state => state.IncrementReducer.value)
    const increment = useDispatch();
    const onIncrement = () => {
        //invoke action creator
        increment(incrementByOne())
    }
    return <div>
        <Heading>
            <h2>Counter : {value}</h2>
        </Heading>
        <button onClick={onIncrement}>Increment</button>

    </div>
}
const CounterIncrementByAmount = props => {

    const value = useSelector(state => state.IncrementByAmountReducer.value)

    const incrementByAmount = useDispatch();

    return <div>
        <Heading>
            <h2>Counter : {value}</h2>
        </Heading>
        <button onClick={() => {
            incrementByAmount(incrementByValue(20))
        }}>IncrmentByAmount</button>
    </div>
}
const App = () => <>
    <Provider store={store}>
        <CounterIncrement />
        <CounterIncrementByAmount />
    </Provider>
</>
ReactDOM.render(<App />, document.getElementById('root'))




