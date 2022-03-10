import React from 'react';
import ReactDOM from 'react-dom'
import { TODO } from './mockdata/todos';

//todoList
// const TodoList = props => <div>
//     {props.todos.map((todo, index) => <div key={index}>
//         <p>id {todo.id}</p>
//         <p>title {todo.title}</p>
//         <p>Status {todo.completed ? "done" : "not Completed"}</p>
//     </div>)
//     }
// </div>

const TodoList = props => <div>{
    props.todos.map((todo, index) => <TodoItem todo={todo} key={index} />)
}
</div>
const TodoItem = ({ todo }) => <div>
    <p>id {todo.id}</p>
    <p>title {todo.title}</p>
    <p>Status {todo.completed ? "done" : "not Completed"}</p>
</div>

const App = props => <div>
    <TodoList todos={TODO} />
</div>

ReactDOM.render(<App />, document.getElementById('root'))