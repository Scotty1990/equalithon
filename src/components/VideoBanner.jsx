import React from 'react';
import '../css/VideoBanner.css';

function VideoBanner(props) {
    return (
        <div>
            <div id='video-banner-div'>
                <p id='welcome'>Welcome!</p>
                <p id='welcome-text'>Global Deeds, Inc, is a hybrid social 
                    enterprise dedicated to providing access to opportunities to 
                    youth living in poverty and educators who support them. As a 
                    company, your subscriptions will help us serve youth in need 
                    of opportunities, and you will have access to highly trained 
                    individuals that can perform at the level you require.
                </p>
                <button id="learn-more"><p id="learn-more-text">Learn More</p></button>
                <div id='video'>
                    <iframe 
                        id="youtube-video"
                        width="460"
                        height="256"
                        src={`https://youtube.com/embed/y3T16Mw7rns`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Global Deeds YouTube"
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoBanner;