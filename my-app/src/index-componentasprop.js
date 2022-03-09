import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';

//
const Panel = props => <div>
    {props.children}
</div>

const Text = props => <h1>{props.text}</h1>
const Image = props => <img src={logo} alt="fallback" />
const App = props => {
    return <div>
        <Panel>
            {/* Passing component as prop */}
            <Text text="Sapient" />
            <Image/>
        </Panel>
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))