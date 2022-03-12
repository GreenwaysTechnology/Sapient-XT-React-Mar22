import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const Customer = props => {
    const [counter, setCounter] = useState(1);
    const [screen, setScreen] = useState('Customer Manager App')
    useEffect(() => {
        //side effects : dom mutatation.
        document.title = screen
    })
    //mount cycle code only will have clean up columnRuleWidth:
    useEffect(() => {

        //return a function : componentwillMount
        return function () {
            //here all resource cleanup code. like remove listerner,removing timers....
        }
    }, [])

    return <div>
        <h1>Customer Manager App: using Side effects</h1>
        <h1>Counter : {counter}</h1>
        <button onClick={() => {
            setScreen(`${screen} - Update`)
        }} >ChangeTitle</button>
    </div>
}

const App = () => <Customer />

ReactDOM.render(<App />, document.getElementById('root'))