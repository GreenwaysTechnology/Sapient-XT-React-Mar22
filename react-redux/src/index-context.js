import React from 'react';
import ReactDOM from 'react-dom'

const theme = {
    backgroundColor: 'green',
    color:'white'
}

//create context object
const { Provider, Consumer } = React.createContext();
// console.log(ThemeContext)

const Toolbar = (props) => <ThemedButton />

const ThemedButton = props => <Button />;

const Button = props => {
    return <Consumer>
        {theme => {
            return <button style={theme}>Hello</button>
        }}
    </Consumer>
}

const App = props => {
    return <Provider value={theme}>
        <Toolbar />
    </Provider>
}

ReactDOM.render(<App />, document.getElementById('root'))


