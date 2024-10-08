// src/Navbar.js
import React from 'react';
import '../src/Navbar.css';

const Navbar = (props) => (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
        <a href="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</a>
        <a href="/about" style={{ color: '#fff', marginRight: '1rem' }}>About</a>
        <a href="/contact" style={{ color: '#fff' }}>{props.contact}</a>
        <h2 className='heading'>{props.title}</h2>
    </nav>
);

export default Navbar;
