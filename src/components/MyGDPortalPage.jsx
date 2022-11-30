import React from 'react';
import { Link } from 'react-router-dom'

function MyGDPortalPage(props) {
    return (
        <div>
            <div id="gd-logo">Logo</div>
            <Link to="faq" id="faq-link">FAQ</Link>
            <Link to="login" id="login">Login</Link>
            <Link to="signup" id="signup">Signup</Link>
            <div id="gd-header">
                <h1>Global Deeds</h1>
                <p>Your global opportunity search provider</p>
                <p>Find reliable educational, employment and emergency resources here and rise to THE TOP!</p>
                <div id="search-text">

                <form>
                    <input type="text"></input>
                </form>
                </div>
            </div>
        </div>
    );
}

export default MyGDPortalPage;