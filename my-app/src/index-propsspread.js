import React from 'react';
import ReactDOM from 'react-dom'


//passing props mannually to child
// const ProfileMaster = props => {
//     return <ProfileDetails
//         id={props.id}
//         name={props.name}
//         status={props.status}
//         city={props.city} />
// }
//passing props using property rethrow method, using spread operator

const ProfileMaster = props => {
    // spread notation
    //{...props} pass all properties which has been received from the parent
    return <ProfileDetails {...props} title="Profile Details" />
}

const ProfileDetails = props => {

    return <div>
        <h1>{props.title}</h1>
        <h1>id {props.id}</h1>
        <h1>Name {props.name}</h1>
        <h1>City {props.city}</h1>
        <h1>Status {props.status ? "available" : "Not Available"}</h1>
    </div>

}
const App = props => {
    return <div>
        <ProfileMaster id={1} name="subramanian" status={true} city="coimbatore" />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))