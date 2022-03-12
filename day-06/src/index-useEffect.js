import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'

const MyComponent = props => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('mount and update is called')
    })
    //only in update
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            // Your useEffect code here to be run on update
            console.log('only update')
        }
    });
    useEffect(() => {
        console.log('mount is called')
    }, [])
    return <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>Update UI</button>
    </div>
}

const App = props => <div>
    <h1>Functonal Component-useEffect</h1>
    <MyComponent />
</div>

ReactDOM.render(<App />, document.getElementById('root'))
