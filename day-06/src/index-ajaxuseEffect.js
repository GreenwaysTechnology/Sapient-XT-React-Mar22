import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const TodoApi = {
    getAllTodos(url) {
        return fetch(url);
    }
}
const Todos = props => {
    const [state, setState] = useState({
        error: null,
        isLoaded: false, //spiner status
        todos: [] // data
    })
    useEffect(() => {
        TodoApi.getAllTodos('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setState(prevState => ({ ...prevState, todos: prevState.todos.concat(todos), isLoaded: true }))
                }, 5000)
            })
            .catch(err => {
                setState(prevState => ({ ...prevState, isLoaded: true, error: err }))
            });
    }, [])
    const { error, isLoaded, todos } = state;
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <TodoList todos={todos} />
    }
}
const TodoList = props => {
    const { todos } = props
    return <ul className="list-group">
        {todos.map((todo, index) => (
            <li key={index}>
                <span className="badge badge-pill badge-primary">
                    {todo.id}
                </span>
                <span>
                    {todo.title}
                </span>
            </li>
        ))}
    </ul>
}
const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2 style={{ backgroundColor: 'yellow' }}>Loading...</h2>
    </>
}

const App = props => <div>
    <h1>Ajax calls inside FuncitionalComponent</h1>
    <Todos />
</div>

ReactDOM.render(<App />, document.getElementById('root'))
