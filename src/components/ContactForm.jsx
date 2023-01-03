import React from 'react';
import Buttons from './BackSaveButton';
function ContactForm(){
    return(
        <div className='contactform'>
            <h1 className='contact'>Contact</h1>
            <h4 className='contact'>Fill out the form to get started</h4>
            <h6 className='contact'>*Indicates a required field</h6>
     <form >
        <input className='contact' type="text" name='phone' placeholder="Phone"  />
        <input className='contact' type="text" name='name' placeholder="Parent Name"  />
        <input className='contact' type="text" name='phone' placeholder="Parent Phone"  />  
        <input className='contact' type="text" name='name' placeholder="Referee Name"  />
        <input className='contact' type="text" name='phone' placeholder="Referee Phone"  />
        <input className='contact' type="text" name='email' placeholder="Referee Email"  />
        
        <label className='contact'>Are you at least 18 years of age?</label>
        <select className='contact'>
            <option>Select one</option>
            <option>Yes</option>
            <option>No</option>
        </select>
        <label className='contact'>Permision form</label>
        <input className='contact' type="file" name='file' placeholder="File"/>
        <Buttons/>
        </form>
        </div>
    )
}
export default ContactForm