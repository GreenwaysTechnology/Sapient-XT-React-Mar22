import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

function add(a, b) {
    return a + b;
}
console.log(add(10, 10))

//child component
// function Profile(id,name) {
// function Profile(profile){
//     return <div className="container">
//         <h1>Profile Details</h1>
//         <h3>id {profile.id}</h3>
//         <h4>Name {profile.name}</h4>     
//     </div>
// }
//props is just variable convention only not syntax.
// function Profile(props){
//     return <div className="container">
//         <h1>Profile Details</h1>
//         <h3>id {props.id}</h3>
//         <h4>Name {props.name}</h4>     
//     </div>
// }
const Profile = props => <div className="container">
    <h1>Profile Details</h1>
    <h3>id {props.id}</h3>
    <h4>Name {props.name}</h4>
    <h4>Status {props.status ? "Avilable" : "Not Available"}</h4>
    <address>
        {props.address.city} {props.address.state}
    </address>
</div>

//react says that dont pass any values as indivdual paramter.
//pack all parameters as single literal object and pass that object
const App = () => {
    // return Profile(1,"subramanian");
    //return Profile({id:1,name:"Subramanian",status:true})
    return <Profile id={1} name="Subramanian" 
    status={true} 
    address={{ city: 'Coimbatore', state: 'Tamil Nadu' }} />
}


ReactDOM.render(<App />, document.getElementById('root'))