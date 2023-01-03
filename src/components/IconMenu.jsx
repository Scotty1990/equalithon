import React from 'react';

function IconMenu(props) {
    if (!props.showIconMenu)
        return null
    
    function handleClose() {
        props.setShowIconMenu(false)
    }

    return (
        <div id="icon-menu-container">
        <div id="icon-menu" className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-body'>
                    <p id="view-profile-text" className='icon-menu-texts'>View Profile</p>
                    <div id="view-profile-line" className='icon-menu-lines'></div>
                    <p id="scholarships-text" className='icon-menu-texts'>Scholarships</p>
                    <div id="a" className='icon-menu-lines'></div>
                    <p id="shelters-text" className='icon-menu-texts'>Shelters</p>
                    <div id="b" className='icon-menu-lines'></div>
                    <p id="job-opportunities-text" className='icon-menu-texts'>Job Opportunities</p>
                    <div id="job-opportunities-line" className='icon-menu-lines'></div>
                    <p id="internship-opportunities-text" className='icon-menu-texts'>Internship Opportunities</p>
                    <div id="internship-opportunites-line" className='icon-menu-lines'></div>
                    <p id="networking-opportunities-text" className='icon-menu-texts'>Networking Opportunities</p>
                    <div id="networking-opportunities-line" className='icon-menu-lines'></div>
                    <p id="free-food-texts" className='icon-menu-texts'>Free Food In Your Area</p>
                    <div id="free-food-in-your-area-line" className='icon-menu-lines'></div>
                </div>
                <div id="close-div" onClick={props.onClose}></div>
                {/* <button onClick={props.onClose}>Close</button> */}
            </div>            
        </div>
        </div>
    );
}

export default IconMenu;