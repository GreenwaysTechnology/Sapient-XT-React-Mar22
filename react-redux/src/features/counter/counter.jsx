import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { CounterDashBoard } from './counterdashboard';

//container
const Counter = props => {
    const value = useSelector(state => state.counter.value)
    const incrementDispatch = useDispatch();
    const incrementByAmountDispatch = useDispatch();
    return <div>
        <CounterDashBoard value={value} incrementDispatch={incrementDispatch} incrementByAmountDispatch={incrementByAmountDispatch} />
    </div>
}
export { Counter };