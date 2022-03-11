import React from 'react';
import ReactDOM from 'react-dom'

class CounterButton extends React.Component {

    state = { count: 1 };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Current State=>', this.state)
        console.log("Next State =>", nextState)
        if (nextState.count !== this.state.count) {
            return true
        }
        return false
    }

    render() {
        console.log('render is called')
        return (
            <>
                <button
                    onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
                    Count: {this.state.count}
                </button>
                <button
                    onClick={() => this.setState(state => ({ count: state.count }))}>
                    Count: {this.state.count}
                </button>
            </>
        );
    }
}

class CounterPureButton extends React.PureComponent {

    state = { count: 1 };

    render() {
        console.log('render is called')
        return (
            <>
                <button
                    onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
                    Count: {this.state.count}
                </button>
                <button
                    onClick={() => this.setState(state => ({ count: state.count }))}>
                    Count: {this.state.count}
                </button>
            </>
        );
    }
}
ReactDOM.render(<>
    <h3>Using ComponentShouldUpdate</h3>
    <CounterButton />
    <hr />
    <h3>PureComponent</h3>
    <CounterPureButton />
</>
    , document.getElementById('root'))