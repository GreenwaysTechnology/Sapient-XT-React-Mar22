
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'
import { Counter } from './features/counter/counter';


const Home = () => <h1>Sapient-home</h1>
const About = () => <h1>Sapient-about</h1>
const Dashboard = () => <h1>Sapient-dashboard</h1>
const Transactions = () => <h1>TransactionPage</h1>


const Layout = () => {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/transcations">Transactions</Link>
                    </li>
                    <li>
                        <Link to="/counter">Redux-Counter</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}



const App = props => {
    return <Provider store={store}>
        <BrowserRouter>
            <Routes>
                {/* Parent Route -Master Menu */}
                <Route path="/" element={<Layout />}>
                    {/* Child routes */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="transcations" element={<Transactions />} />
                    <Route path="counter" element={<Counter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
}

ReactDOM.render(<App />, document.getElementById('root'))