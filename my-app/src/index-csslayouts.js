import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from './layout/page';
// import './index.css' //webpack automatically include this inside bundle
// import './App.css'
import 'bootstrap/dist/css/bootstrap.css'



const App = () => <div className="container">
    <Page />
</div>

ReactDOM.render(<App />, document.getElementById('root'))