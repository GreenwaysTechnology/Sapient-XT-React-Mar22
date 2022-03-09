import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';

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
//set property validation rules for property
Profile.propTypes = {
    //rules for property
    id: PropTypes.number,
    name:PropTypes.string,
    status:PropTypes.bool
}

const App = () => {
    return <div>
        <Profile id={1} name="ram" status={true} />

    </div>
}
ReactDOM.render(<App />, document.getElementById('root'))