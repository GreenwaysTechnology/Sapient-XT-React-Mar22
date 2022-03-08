import React from "react";
import ReactDOM from 'react-dom';
//Header
const Header = () => <header>
    <h1>Sapient</h1>
</header>
//Footer
const Footer = () => <div>
    <h3>Footer</h3>
</div>
//Body
const Body = () => <div>
    <p>Publicis Sapient is an American digital consulting company, founded as Sapient in Cambridge, Massachusetts in 1990 by Jerry Greenberg and J. Stuart Moore</p>
    <p>
        On February 6, 2015, Sapient became a fully owned division of French advertising giant Publicis, in a deal valued at $3.7bn (£2.3bn)
    </p>
</div>

const Page = ()=> <div>
    <Header/>
    <Body/>
    <Footer/>
</div>


ReactDOM.render(<Page />, document.getElementById('root'));