import React from 'react'
import ReactDOM from 'react-dom'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
class Counter extends React.Component {
    state = { counter: 1 }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

function App() {
    return (
        <div>
            <p>
                <b>
                    Click on the numbers to increase the counters.
                    <br />
                    The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
                </b>
            </p>
            <hr />
            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))