import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    state = {
        value: 0,
        text: 'default',
        isLoaded: false,
        like: {
            likes: 0,
        }
    }
    onIncrement = evt => {
        this.setState(prevState => ({ ...prevState, value: prevState.value + 1 }))
    }
    onLoading = evt => {
        this.setState(prevState => ({ ...prevState, isLoaded: !prevState.isLoaded }))
    }
    onLike = evt => {
        // this.setState(prevState => {
        //     return {
        //         ...prevState, // level-0 copy
        //         like: {
        //             //  ...prevState.house, //level -1 - inner object  copy
        //             likes: prevState.like.likes + 2
        //         }
        //     }
        // })
        this.setState(prevState => ({
            ...prevState, // level-0 copy
            like: {
                //  ...prevState.house, //level -1 - inner object  copy
                likes: prevState.like.likes + 2
            }
        }))

    }
    render() {
        console.log("Current State => ", this.state)
        return <div>
            <h1>Value : {this.state.value}</h1>
            <h2>Loading : {this.state.isLoaded ? "Loading" : "Not Loading"}</h2>
            <h3>Likes {this.state.like.likes}</h3>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={this.onLoading}>Loading</button>
            <div>
                <button onClick={this.onLike}>Like</button>
            </div>
        </div>
    }
}
const MyCounter = props => {
    //state 
    const [value, setValue] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [like, setLikes] = useState({
        likes: 0,
    })
    const onIncrement = evt => setValue(value + 1)

    const onLike = evt => {
        setLikes(prevLikes => ({ ...prevLikes, likes: prevLikes.likes + 2 }))
    }
    useEffect(() => {
        console.log('init')
    }, [])
    // useEffect(() => {
    //     console.log('update')
    // })
    console.log('...............................................')
    console.log(`Current State => value: ${value}, isLoaded: ${isLoaded} ,likes ${like.likes}`)
    return <div>

        <h1>Value : {value}</h1>
        <h2>Loading : {isLoaded ? "Loading" : "Not Loading"}</h2>
        <h3>Likes {like.likes}</h3>

        <button onClick={onIncrement}>+</button>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setIsLoaded(!isLoaded)}>Loading</button>
        <div>
            <button onClick={onLike}>Like</button>
        </div>
    </div>
}


const App = props => <div>
    <h1>Class Component</h1>
    <Counter />
    <hr />
    <h1>Functonal Component-Hook</h1>
    <MyCounter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))
