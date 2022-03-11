import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//render method return values

class ParentComponent extends Component {
    state = {
        i: 0
    }
    render() {
        //React Element
        // return <div>
        //     <h1>Parent Component</h1>
        // </div>
        //array
        //return [1,2,3,4,5,6]
        //fragement
        //return <> </>
        //numbers
        //return 10
        //strings
        //return "hello"
        //booleans
        //return true;
        //null can be return
        //return null;
        return;
    }

}


ReactDOM.render(<ParentComponent />, document.getElementById('root'))