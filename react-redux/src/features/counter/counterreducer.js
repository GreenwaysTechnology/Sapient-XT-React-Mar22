import {increment,incrementByAmount} from './counteractions'

const initState = {
    value: 20
}
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case increment:
            return { ...state, value: state.value + 1 }
        case incrementByAmount:
            return { ...state, value: state.value + action.payload }
        default:
            return state;//default state
    }
}
export { counterReducer }