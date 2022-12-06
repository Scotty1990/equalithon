import React from 'react';
import NavBar from './NavBar';
import Video from './pics/video.webp'

function MyGDPortalPage() {
    return (
        <div className='nav-bar'>
            <NavBar />
            <div className='gd-header'>
                <h1 className='header-title-gd'>Global Deeds</h1>
                <p className='your-global-search-provider'>Your global opportunity search provider</p>
                <p className='find-education-employment-resources'>Find reliable educational, employment and emergency resources here and rise to THE TOP!</p>
                <form>
                    <div className='search-text-div'>
                        <input 
                            className="search-text-input-field"
                            type="text"
                            placeholder='Enter Search Keyword'
                        ></input>
                    </div>
                    <select name="plan" className='dropdown-div'>
                        <option value="all-categories">All Categories</option>
                        <option value="starter">Cat 1 </option>
                        <option value="professional">Cat 2</option>
                        <option value="corporate">Cat 3</option>
                    </select>
                    <button className="find-btn"><div className='search-icon-div'><div className='search-icon'></div></div><p className='find-btn-text'>Find</p></button>
                </form>
            </div>
            <div className='video-banner-div'>
                <p className='welcome'>Welcome!</p>
                <p className='welcome-text'>Global Deeds, Inc, is a hybrid social 
                    enterprise dedicated to providing access to opportunities to 
                    youth living in poverty and educators who support them. As a 
                    company, your subscriptions will help us serve youth in need 
                    of opportunities, and you will have access to highly trained 
                    individuals that can perform at the level you require.
                </p>
                <div className='video'><img id='video-img' src={Video} alt='video' /></div>
            </div>
            <div className='students-individuals-div'>
                <p className='students-individuals-text'>Students / Individuals</p>
            </div>
            <div className='students-individuals-category-card'>
                <div className='category-title-icon-div-students-individuals'>
                    <div className='category-title-and-icon'>
                        <p className='earn-money'>Earn Money</p>
                    </div>
                </div>
                <div className='category-listings-div'>
                    <div className='category-listings'>
                        <p className='jobs'>Jobs</p>
                        <div className='jobs-line'></div>
                        <p className='internships'>Internships</p>
                        <div className='internships-line'></div>
                        <p className='summer-programs'>Summer Programs</p>
                        <div className='summer-programs-line'></div>
                        <p className='scholarships'>Scholarships</p>
                        <div className='scholarships-line'></div>
                        <p className='financial-assistance'>Financial Assistance</p>
                        <div className='financial-assistance-line'></div>
                    </div>
                </div>
            </div>
            <div className='emergency-listings-category-card'>
                <div className='category-title-icon-div-emergency-listings'>
                    <div className=''></div>
                </div>
            </div>
        </div>
    );
}

export default MyGDPortalPage;