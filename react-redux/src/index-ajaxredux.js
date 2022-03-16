import { applyMiddleware, createStore } from "redux";
import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import { Provider, useSelector, useDispatch } from "react-redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//action creator, which returns action with delayed manner


const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'todos':
            return state.concat(action.payload)
        default:
            return state;
    }
}

function todocreator(todos) {
    return {
        type: 'todos',
        payload: todos
    }
}
function todosAsync() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
            res.json().then(todos => {
                dispatch(todocreator(todos));
            });
        })

    }
}


//create store object
const store = createStore(todosReducer, applyMiddleware(thunk, logger));

const Todos = props => {
    const todos = useSelector(state => state);
    const getTodos = useDispatch();
    useEffect(() => {
        getTodos(todosAsync())
    }, [])
    return <div>
        <h1>Todos App</h1>
        <ul>
            {todos.map(todo => <li key={todo.id}>
                <span>{todo.title}</span>
            </li>)}
        </ul>
    </div>
}

const App = () => <>
    <Provider store={store}>
        <Todos />
    </Provider>
</>
ReactDOM.render(<App />, document.getElementById('root'))




