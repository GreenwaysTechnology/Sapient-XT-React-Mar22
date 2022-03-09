import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
//profile component


function getPoints(){
   return 10;
}


const Profile = () => {
    const id = 1;
    const name = "Subramanian";
    const status = true;
    const address = {
        city: 'coimbatore',
        state: 'Tamil nadu'
    }
    return <div className="container">
        <h1>Profile Details</h1>
        <h3>Id  {id}</h3>
        <h3>Name {name} </h3>
        {/* React converts boolean values into empty string, if you want to display something , you have to use tenary operator to replace empty string */}
        <h3>status {status ? "Available" : "Not Available"}</h3>
        <h3>Points {getPoints() * 2 }</h3>
        <address>
            {address.city} {address.state}
        </address>
    </div>
}
ReactDOM.render(<Profile />, document.getElementById('root'))