import React from 'react';
import ReactDOM from 'react-dom'

const theme = {
    backgroundColor: 'yellow'
}

const Toolbar = (props) => <ThemedButton theme={props.theme} />
const ThemedButton = (props) => <Button theme={props.theme} />;
const Button = props => <button style={props.theme}>Hello</button>

const App = props => <Toolbar theme={theme} />;

ReactDOM.render(<App />, document.getElementById('root'))


