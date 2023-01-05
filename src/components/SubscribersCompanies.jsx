import React from 'react';
import '../css/SubscribersCompanies.css';

function SubscribersCompanies() {
    return (
        <div id='subscribers-companies-categories'>
            <div id="subscribers-container">
                <div className='bottom-divs' id="subscribers">
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
                            class="feather feather-user-plus"
                        ><path 
                            d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        /><circle 
                            cx="8.5" 
                            cy="7" 
                            r="4"
                        /><line 
                            x1="20" 
                            y1="8" 
                            x2="20" 
                            y2="14"
                        /><line 
                            x1="23" 
                            y1="11" 
                            x2="17" 
                            y2="11"/
                    ></svg>
                    <p className='bottom-divs-text-and-number' id="subscribers-number">0</p>
                    <p className='bottom-divs-text-and-number' id="subscribers-text">Subscribers</p>
                </div>
                <div className='orange-bottom-divs' id="orange-bottom-subscribers"></div>
            </div>
            <div id="companies-container">
                <div className='bottom-divs' id="companies">
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
                            class="feather feather-globe"
                        ><circle 
                            cx="12" 
                            cy="12" 
                            r="10"
                        /><line 
                            x1="2" 
                            y1="12" 
                            x2="22" 
                            y2="12"
                        /><path 
                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    /></svg>
                    <p className='bottom-divs-text-and-number' id="companies-number">0</p>
                    <p className='bottom-divs-text-and-number' id="companies-text">Companies</p>
                    <div className='orange-bottom-divs' id='orange-bottom-companies'></div>
                </div>
            </div>
            <div id="categories-container">
                <div className='bottom-divs' id="categories">
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
                            class="feather feather-grid"
                        ><rect 
                            x="3" 
                            y="3" 
                            width="7" 
                            height="7"
                        /><rect 
                            x="14" 
                            y="3" 
                            width="7" 
                            height="7"
                        /><rect 
                            x="14" 
                            y="14" 
                            width="7" 
                            height="7"
                        /><rect 
                            x="3" 
                            y="14" 
                            width="7" 
                            height="7"
                    /></svg>
                    <p className='bottom-divs-text-and-number' id="categories-number">0</p>
                    <p className='bottom-divs-text-and-number' id="categories-text">Categories</p>
                    <div id="orange-bottom-categories" className='orange-bottom-divs'></div>
                </div>
            </div>
        </div>
    );
}

export default SubscribersCompanies;