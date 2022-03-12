import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom'

const Greet = lazy(() => import('./greeter'));

const App = props => <div>
    <Suspense fallback={<div>Loading...</div>}>
        <Greet />
    </Suspense>
</div>

ReactDOM.render(<App />, document.getElementById('root'))
