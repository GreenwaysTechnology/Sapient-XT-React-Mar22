import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

//default Args
function multiply(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    return a * b; //NaN
}
console.log(multiply(6, 3))
console.log(multiply())


const Profile = props => {
    return <div className="container">
        <h1>Profile details</h1>
        <h2>Id : {props.id}</h2>
        <h2>Name {props.name.toUpperCase()}</h2>
        <h2>Status {props.status ? "Avaiable" : "Not Available"}</h2>
    </div>
}
//if you dont pass any property, we can supply default props which saves lot of runtime bugs.
Profile.defaultProps = {
    id: 0,
    name: 'default',
    status: false
}
const App = () => {
    return <div>
        <Profile />
        <Profile id={1} />
        <Profile id={1} name="ram" status={true}/>

    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))