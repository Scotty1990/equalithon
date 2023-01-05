import React from 'react';
import { Link } from 'react-router-dom'
import '../css/TopNav.css';

function NavBar() {
    return (
        <div id='nav-bar'>
            <p id='nav-bar-gd'>Global Deeds</p>
            <div id='faq-div' className='nav-bar-links-divs'>
                <Link to="faq" id="faq-link" className='nav-bar-links'>FAQ</Link>
            </div>
            <div id='login-div' className='nav-bar-links-divs'>
                <Link to="login" id="login-link" className='nav-bar-links'>Login</Link>
            </div>
            <div id='signup-div' className='nav-bar-links-divs'>
                <Link to="signup" id="signup-link" className='nav-bar-links'>Signup</Link>
            </div>
        </div>
    );
}

export default NavBar;