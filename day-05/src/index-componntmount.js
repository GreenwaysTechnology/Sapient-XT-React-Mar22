import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class ParentComponent extends Component {
    state = {
        i: 0
    }
    //mount phase methods
    constructor() {
        super()
        console.log('Parent Constructor is called')
        // this.state = {
        //     i: 0
        // }
    }
    render() {
        console.log('Parent render is called')

        return <div>
            <h1>Parent Component</h1>
            <ChildComponent />
        </div>
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDerivedStateFromProps is called')
        return null;
    }
    componentDidMount() {
        console.log('Parent ComponentDidMount is called')
    }


}

class ChildComponent extends Component {

    state = {
        j: 0
    }
    //mount phase methods
    constructor() {
        super()
        console.log('ChildComponent Constructor is called')
    }
    render() {
        console.log('ChildComponent render is called')

        return <div>
            <h1>Child Component</h1>
        </div>
    }
    static getDerivedStateFromProps(props, state) {
        console.log('ChildComponent getDerivedStateFromProps is called')
        return null;
    }
    componentDidMount() {
        console.log('ChildComponent ComponentDidMount is called')
    }



}

ReactDOM.render(<ParentComponent />, document.getElementById('root'))