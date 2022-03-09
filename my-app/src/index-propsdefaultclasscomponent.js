import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends React.Component {
    //default props inside class : which is not recommended
    static defaultProps = {
        id: 0,
        name: 'default',
        status: false
    }
    render() {
        console.log(this.props)
        return <div className="container">
            <h1>Profile details</h1>
            <h2>Id : {this.props.id}</h2>
            <h2>Name {this.props.name}</h2>
            <h2>Status {this.props.status ? "Avaiable" : "Not Available"}</h2>
        </div>
    }
}
// Profile.defaultProps = {
//     id: 0,
//     name: 'default',
//     status: false
// }
const App = () => {
    return <div>
        <Profile />
        <Profile id={1} />
        <Profile id={1} name="ram" status={true} />

    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))