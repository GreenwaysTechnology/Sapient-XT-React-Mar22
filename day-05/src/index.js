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
            <button onClick={() => {
                this.setState({ i: this.state.i + 1 })
            }}>TriggerUpdate</button>
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
            <SubChildComponent/>
        </div>
    }
    shouldComponentUpdate(nextProp, nextState) {
        //biz logic : we compare props and state if it is same, return false else return true;
        console.log('shouldComponentUpdate is called')
        return true;
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ChildComponent getDerivedStateFromProps is called')
        return null;
    }
    componentDidMount() {
        console.log('ChildComponent ComponentDidMount is called')
    }
    componentDidUpdate(){
        console.log('ChildComponent componentDidUpdate is called')

    }



}

class SubChildComponent extends React.PureComponent {

    state = {
        j: 0
    }
    //mount phase methods
    constructor() {
        super()
        console.log('SubChildComponent Constructor is called')
    }
    render() {
        console.log('SubChildComponent render is called')

        return <div>
            <h1>SubChildComponent Component</h1>
        </div>
    }

    static getDerivedStateFromProps(props, state) {
        console.log('SubChildComponent getDerivedStateFromProps is called')
        return null;
    }
    componentDidMount() {
        console.log('SubChildComponent ComponentDidMount is called')
    }
 



}
ReactDOM.render(<ParentComponent />, document.getElementById('root'))