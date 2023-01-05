import React from 'react';
import '../css/BottomNav.css';

function BottomNav(props) {
    return (
        <div id="bottom-nav">
            <div id="bottom-nav-upper-div">
                <div id="bottom-nav-circle"></div>
                <p id='quick-links'>Quick Links</p>
                <ul>
                        <p id="about">• About</p>
                        <p id="services">• Services</p>
                        <p id="our-team">• Our Team</p>
                        <p id="what-we-do">• What We Do</p>
                        <p id="core-values">• Core Values</p>
                        <p id="contact-us-sub-link">• Contact Us</p>
                </ul>
                    <p id="hours-of-operation">Hours of Operation</p>
                    <ul>
                            <p id="email-and-phone-messaging">• 24/7 Email and Phone Messaging</p>
                            <p id="by-appointment-only">• By Appointment Only</p>
                    </ul>
                    <p id="contact-us">Contact#contactUS</p>
                    <p id="phone-number">Phone: 800-41-DEEDS x2</p>
                    <p id="email">Email: info@globaldeeds.org</p>
                    <a target="_blank" href="https://www.facebook.com/globaldeeds/">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-facebook"
                        ><path 
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        /></svg>
                    </a>
                    <a target="_blank" href="https://twitter.com/global_deeds?lang=en">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-twitter"
                        ><path 
                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                        /></svg>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/globaldeeds/">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-instagram"
                        ><rect 
                            x="2" 
                            y="2" 
                            width="20" 
                            height="20" 
                            rx="5" 
                            ry="5"
                        /><path 
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        /><line 
                            x1="17.5" 
                            y1="6.5" 
                            x2="17.51" 
                            y2="6.5"
                        /></svg>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/@globaldeeds8148">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-youtube"
                        ><path 
                            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                        /><polygon 
                            points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                        /></svg>
                    </a>
                    <a 
                        href="https://www.freepnglogos.com/pics/app-store-png-logo" 
                        title="Image from freepnglogos.com"
                        id="app-store-img"
                    ><img 
                        src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png" 
                        width="200" 
                        alt="Download on the app store logo png" 
                    /></a>
        </div>
        <div id="bottom-nav-lower-div"></div>
    </div>
    );
}

export default BottomNav;