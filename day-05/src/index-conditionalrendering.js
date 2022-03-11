import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


const UserGreeting = (props) => {
    return <h1>Welcome back!</h1>;
}
const GuestGreeting = (props) => {
    return <h1>Please sign up.</h1>;
}

// const Login = (props) => {
//     const isLoggedIn = props.isLoggedIn;
//     //conditional rendering
//     // if (isLoggedIn) {
//     //     return <UserGreeting />;
//     // }
//     // return <GuestGreeting />;
//     //conditional rendering with Tenary Operator
//      return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
// }
//const Login = (props) => (props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />)
const Login = ({ isLoggedIn }) => (isLoggedIn ? <UserGreeting /> : <GuestGreeting />)

const App = () => <div className="container">
    <Login isLoggedIn={true} />
    <Login isLoggedIn={false} />

</div>
ReactDOM.render(<App />, document.getElementById('root'))