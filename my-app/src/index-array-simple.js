
import React from 'react';
import ReactDOM from 'react-dom'

//Number list
const NumberList = props => <div>
    <ul>
        {/* create li element for every value in the number */}
        {
            // props.scores.map(function (item, index) {
            //     return <li>{item}</li>
            // })
            // props.scores.map((item, index) => {
            //     return <li>{item}</li>
            // })
            props.scores.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
</div>




const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const App = props => <div>
    <NumberList scores={scores} />
</div>

ReactDOM.render(<App />, document.getElementById('root'))