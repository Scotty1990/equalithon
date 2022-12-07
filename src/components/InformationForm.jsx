import React from 'react';
import Buttons from './BackSaveButton';
function InformationForm(){
    return(
        <div>
            <h1>Information</h1>
            <h4>Fill out the form to get started</h4>
            <h6>*Indicates a required field</h6>
     <form >
        <input type="text" name='email' placeholder="Email"  />
        <input type="text" name='password' placeholder="Password"  />
        <input type="text" name='name' placeholder="Full Name"  />
        <label>DOB</label>
        <input type='date' placeholder='DOB' name='dob'/>
        <label>Gender</label>
        <input type='checkbox' name='male' placeholder='Male'/>
        <input type='checkbox' name='female' placeholder='Female'/>
        <input type='checkbox' name='other' placeholder='Other'/>
        <label>Pronouns</label>
        <select>
            <option>None</option>
            <option>she/her/hers</option>
            <option>he/him/his</option>
            <option>prefer not to say</option>
        </select>
        <input type="text" name='address' placeholder="Address"  />
        <input type="text" name='city' placeholder="City"  />
        <input type="text" name='state' placeholder="State/Province/Country"  />
        <input type="text" name='zipcode' placeholder="Postal/Zip Code"/>
        <Buttons/>
        </form>
        </div>
    )
}
export default InformationForm