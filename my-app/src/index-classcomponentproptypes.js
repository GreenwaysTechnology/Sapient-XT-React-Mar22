import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';

class Profile extends React.Component {
    //default props inside class : which is not recommended
    static defaultProps = {
        id: 0,
        name: 'default',
        status: false
    }
    static propTypes = {
        //rules for property
        id: PropTypes.number,
        name:PropTypes.string,
        status:PropTypes.bool
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
//set property validation rules for property
// Profile.propTypes = {
//     //rules for property
//     id: PropTypes.number,
//     name:PropTypes.string,
//     status:PropTypes.bool
// }

const App = () => {
    return <div>
         <Profile id={1} name="ram" status={true} />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))