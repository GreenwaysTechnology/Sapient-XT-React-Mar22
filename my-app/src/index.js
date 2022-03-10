import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class TodoApp extends Component {

    state = {
        items: [{
            id: 0,
            text: 'Learn React'
        }], //array of todos
        text: ''  // new todo to be added
    }
    onTextChange = e => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = e => {
        //to stop auto form submission
        e.preventDefault();
        //form validation
        if (this.state.text.length === 0) {
            return; //return false
        }
        const newTodo = {
            text: this.state.text,
            id: Date.now()
        };
        //update the items array
        // this.setState(state => {
        //     return {
        //         items: state.items.concat(newTodo),
        //         text: ''
        //     }
        // })
        this.setState((prveState) => ({ ...prveState, items: prveState.items.concat(newTodo), text: '' }))
    }

    render() {
        return <div className="container">
            <h1>Todo App</h1>
            <hr />
            <h2>Todos</h2>
            <ul>
                {this.state.items.map((todo, index) => {
                    return <li key={index}>{todo.text}</li>
                })}
            </ul>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <br />
                <input onChange={this.onTextChange} value={this.state.text} />
                <button className="btn btn-success" style={{ margin: 5 }}>
                    +
                </button>
            </form>
        </div>
    }
}

const App = props => <div>
    <TodoApp />
</div>
ReactDOM.render(<App />, document.getElementById('root'))