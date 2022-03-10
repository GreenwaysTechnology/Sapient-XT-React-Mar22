import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class UserInput extends Component {
    state = {
        text: "defaultValue"
    }
    //evt is just variable holding SynEvent Object to capture Event information
    onUpdate = evt => {
        this.setState((prevState) => {
            return { ...prevState, text: evt.target.value }
        });
    }
    onShow = evt => {
        alert(this.state.text)
    }
    render() {
        return <div className="container">
            <h1>User Input Application</h1>
            <input onChange={this.onUpdate} />
            <button onClick={this.onShow}>Show Value</button>
            <h2>{this.state.text}</h2>
        </div>
    }
}

const App = props => <div>
    <UserInput />
</div>
ReactDOM.render(<App />, document.getElementById('root'))