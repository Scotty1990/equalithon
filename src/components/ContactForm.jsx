import React from 'react';
import Buttons from './BackSaveButton';
function ContactForm(){
    return(
        <div>
            <h1>Contact</h1>
            <h4>Fill out the form to get started</h4>
            <h6>*Indicates a required field</h6>
     <form >
        <input type="text" name='phone' placeholder="Phone"  />
        <input type="text" name='name' placeholder="Parent Name"  />
        <input type="text" name='phone' placeholder="Parent Phone"  />  
        <input type="text" name='name' placeholder="Referee Name"  />
        <input type="text" name='phone' placeholder="Referee Phone"  />
        <input type="text" name='email' placeholder="Referee Email"  />
        
        <label>Are you at least 18 years of age?</label>
        <select>
            <option>Select one</option>
            <option>Yes</option>
            <option>No</option>
        </select>
        <label>Permision form</label>
        <input type="file" name='file' placeholder="File"/>
        <Buttons/>
        </form>
        </div>
    )
}
export default ContactForm