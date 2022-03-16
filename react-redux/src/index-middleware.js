import { applyMiddleware, createStore } from "redux";
import React from 'react'
import ReactDOM from "react-dom"
import { Provider, useSelector, useDispatch } from "react-redux";
import logger from 'redux-logger'

const initState = {
    value: 20
}
//it is eq to setState in react
const counterReducer = (state = initState, action) => {
    console.log('Previous State => ', state)
    switch (action.type) {
        case 'counter/increment':
            return { ...state, value: state.value + 1 }
        case 'counter/incrementByAmount':
            return { ...state, value: state.value + action.payload }
        default:
            return state;//default state
    }
}
//middleware
// function welcome(store) {
//     return function (next) {
//         return function (action) {
//             //middleware code
//             let res = next(action);
//             console.log("Welcome to ", action)
//             return next;
//         }
//     }

// }
//custom middlewares
const welcome = store => next => action => {
    //middleware code
    let res = next(action);
    console.log("Welcome to ", action)
    return next;
}



//create store object
const store = createStore(counterReducer, applyMiddleware(welcome,logger));

const Heading = props => <header>
    {props.title} {props.children}
</header>

const Counter = props => {
    const value = useSelector(state => state.value)
    const increment = useDispatch();
    const incrementByAmount = useDispatch();

    const onIncrement = () => {
        increment({ type: 'counter/increment' })
    }
    return <div>
        <Heading title="Sapient">
            <h1>Counter Application- React -redux</h1>
        </Heading>
        <Heading>
            <h2>Counter : {value}</h2>
        </Heading>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={() => {
            incrementByAmount({ type: 'counter/incrementByAmount', payload: 10 })
        }}>IncrmentByAmount</button>
    </div>
}

const App = () => <>
    <Provider store={store}>
        <Counter />
    </Provider>
</>
ReactDOM.render(<App />, document.getElementById('root'))




