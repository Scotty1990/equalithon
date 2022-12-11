import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav-bar'>
            <p className='nav-bar-gd'>Global Deeds</p>
            <div className='faq-div'>
                <Link to="faq" className="faq-link">FAQ</Link>
            </div>
            <div className='login-div'>
                <Link to="login" className="login-link">Login</Link>
            </div>
            <div className='signup-div'>
                <Link to="signup" className="signup-link">Signup</Link>
            </div>
        </div>
    );
}

export default NavBar;