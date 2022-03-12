import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const MyComponent = props => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('mount and update is called')
    })
    useEffect(() => {
        console.log('mount is called')
    },[])
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
