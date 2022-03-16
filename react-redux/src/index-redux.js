import { createStore } from "redux";

//reducer function which represents the biz logic in the application
const initState = {
    value: 10
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

store.subscribe(() => {
    //get new State
    console.log('new State =>', store.getState())
})

//sending request to get new state.
//declare action
const incrementAction = {
    type: 'counter/increment'
}

store.dispatch(incrementAction)

store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)



