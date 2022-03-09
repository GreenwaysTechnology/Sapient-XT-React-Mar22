import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Profile } from "./profile";

const App = () => {
    return <Profile id={100} firstName="Subramanian" middleName="" lastName="Murugan" />
}


ReactDOM.render(<App />, document.getElementById('root'))