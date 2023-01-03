import React from 'react';

function SearchJobsForm(props) {
    return (
        <div>
            <form>
                <div id={`${props.textBoxId}`}>
                    <input 
                        id="search-text-input-field"
                        type="text"
                        placeholder='Enter Search Keyword'
                    ></input>
                </div>
                <select name="plan" id={`${props.dropdownId}`}>
                    <option value="all-categories">All Categories</option>
                    <option value="starter">Cat 1 </option>
                    <option value="professional">Cat 2</option>
                    <option value="corporate">Cat 3</option>
                </select>
                <button id={`${props.findButtonId}`}>
                    <div id='search-icon-div'>
                        <div id='search-icon'></div>
                    </div>
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
                            class="feather feather-search"
                        >
                        <circle 
                            cx="11" 
                            cy="11" 
                            r="8"/
                        >
                        <line 
                            x1="21" 
                            y1="21" 
                            x2="16.65" 
                            y2="16.65"
                    /></svg>
                    <p id='find-btn-text'>Find</p>
                </button>
            </form>
        </div>
    );
}

export default SearchJobsForm;