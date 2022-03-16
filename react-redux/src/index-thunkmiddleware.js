import { applyMiddleware, createStore } from "redux";
import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import { Provider, useSelector, useDispatch } from "react-redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initState = {
    value: 20,
    isLoading: true
}
//it is eq to setState in react
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...state, value: state.value + 1,isLoading:false }
        case 'counter/incrementByAmount':
            return { ...state, value: state.value + action.payload }
        default:
            return state;//default state
    }
}
//action creator, which returns action with delayed manner

const incrementActionCreator = () => {
    return {
        type: 'counter/increment'
    }
}
//
function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(incrementActionCreator())
        }, 5000)
    }
}



//create store object
const store = createStore(counterReducer, applyMiddleware(thunk, logger));

const Counter = props => {
    const value = useSelector(state => state.value)
    const isLoading = useSelector(state => state.isLoading)
    const increment = useDispatch();
    const incrementByAmount = useDispatch();

     useEffect(()=>{
        increment(incrementAsync())
     },[])

    const onIncrement = () => {
        console.log(isLoading)
        increment(incrementAsync())
    }
    return <div>
        <h1>Async Counter Application- React -redux</h1>
        <h2>Counter : {isLoading ? "Loading" : value}</h2>
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




