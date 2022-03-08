import React from 'react';
import './header.css'

//style object
const headerStyle = {
    color: 'red'
};

export const Header = () => <header className="background">
    {/* Adding style attribute via variables */}
    <h1 style={headerStyle}>Sapient</h1>
    {/* this is inline style : adding style object in the same line */}
    <h2 style={{ color: 'blue' }}>Publisis</h2> 
</header>