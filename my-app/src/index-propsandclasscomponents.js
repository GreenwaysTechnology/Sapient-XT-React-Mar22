import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends React.Component {

    render(){
     console.log(this.props)
        return <div className="container">
                <h1>Profile details</h1>
                <h2>Id : {this.props.id}</h2>
                <h2>Name {this.props.name}</h2>
                <h2>Status {this.props.status ? "Avaiable" : "Not Available"}</h2>
        </div>
    }
}


const App = () => {
    return <Profile id={1} name="Subramanian" status={true} />
}


ReactDOM.render(<App />, document.getElementById('root'))