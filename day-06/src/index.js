//Custom Hooks
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useWindowTitle } from './hooks/screentitlehook';
import { useWindowInnerWidth } from './hooks/windowsizehook';

const Customer = props => {
    //feature-1 update Screen title
    const { setScreen } = useWindowTitle('Customer ManagerApp')
    //feature 2 - get Window width
    const width = useWindowInnerWidth();

    return <div>
        <h1>Customer Details </h1>
        <p>Name {"Subramanian"}</p>
        <p>Address {"Coimbatore"}</p>
        <hr />
        <p>Current Screen size {width}</p>
        <button onClick={() => {
            setScreen('CustomerManager App-Update')
        }}>Update Title</button>
    </div>
};

const Employee = props => {
    //feature-1 update Screen title
    //const [screen, setScreen] = useState('Customer Manager App')
    const { screen, setScreen } = useWindowTitle('Employee ManagerApp')

    //feature 2 - get Window width
    const [width, setWidth] = useState(window.innerWidth);

    //useEffect to update window title after component mounted into dom
    useEffect(() => {
        document.title = screen;
    })
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //imperative dom listner
        window.addEventListener('resize', handleResize)
        //clean up code
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return <div>
        <h1>Employee Details </h1>
        <p>Name {"Subramanian"}</p>
        <p>Address {"Coimbatore"}</p>
        <hr />
        <p>Current Screen size {width}</p>
        <button onClick={() => {
            setScreen('CustomerManager App-Update')
        }}>Update Title</button>
    </div>
};

const App = () => {
    return <div>
        <Customer />
        {/* <Employee/> */}
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));