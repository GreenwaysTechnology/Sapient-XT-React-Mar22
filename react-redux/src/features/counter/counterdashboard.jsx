import React from 'react'
import { increment, incrementByAmount } from './counteractions'

export const CounterDashBoard = props => {
    const { incrementDispatch, incrementByAmountDispatch, value } = props;

    return <>
        <h1>Counter Application- React -redux</h1>
        <h2>Counter : {value}</h2>
        <button onClick={() => {
            incrementDispatch({ type: increment })
        }}>Increment</button>
        <button onClick={() => {
            incrementByAmountDispatch({ type: incrementByAmount, payload: 10 })
        }}>IncrmentByAmount</button>

    </>
}