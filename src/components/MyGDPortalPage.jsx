import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './pics/logo-main.jpeg'

function MyGDPortalPage(props) {
    return (
        <div>
            <img src={Logo} id="gd-logo" />
            <Link to="faq" id="faq-link">FAQ</Link>
            <Link to="login" id="login">Login</Link>
            <Link to="signup" id="signup">Signup</Link>
            <div id="gd-header">
                <h1>Global Deeds</h1>
                <p>Your global opportunity search provider</p>
                <p>Find reliable educational, employment and emergency resources here and rise to THE TOP!</p>
                <form>
                    <input id="search-text" type="text"></input>
                </form>
            </div>
        </div>
    );
}

export default MyGDPortalPage;