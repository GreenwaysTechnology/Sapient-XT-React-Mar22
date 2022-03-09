import React from 'react';
import ReactDOM from 'react-dom'


const ProfileMaster = props => {
    return <ProfileDetails {...props} title="Profile Details" />
}
//without destrucing
// const ProfileDetails = props => {
//     return <div>
//         <h1>{props.title}</h1>
//         <h1>id {props.id}</h1>
//         <h1>Name {props.name}</h1>
//         <h1>City {props.city}</h1>
//         <h1>Status {props.status ? "available" : "Not Available"}</h1>
//     </div>
// }
//destrucing inside function
// const ProfileDetails = props => {
//     const { title, id, name, city, status } = props;
//     return <div>
//         <h1>{title}</h1>
//         <h1>id {id}</h1>
//         <h1>Name {name}</h1>
//         <h1>City {city}</h1>
//         <h1>Status {status ? "available" : "Not Available"}</h1>
//     </div>
// }

//argument destrucing
const ProfileDetails = ({ title, id, name, city, status }) => <div>
    <h1>{title}</h1>
    <h1>id {id}</h1>
    <h1>Name {name}</h1>
    <h1>City {city}</h1>
    <h1>Status {status ? "available" : "Not Available"}</h1>
</div>

const App = props => {
    return <div>
        <ProfileMaster id={1} name="subramanian" status={true} city="coimbatore" />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))