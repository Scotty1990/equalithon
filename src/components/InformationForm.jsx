import React from 'react';
import Buttons from './BackSaveButton';
function InformationForm(){
    return(
        <div className='infoform'>
            <h1>Information</h1>
            <h4>Fill out the form to get started</h4>
            <h6>*Indicates a required field</h6>
     <form >
        <input className='info' type="text" name='email' placeholder="Email"  />
        <input className='info' type="text" name='password' placeholder="Password"  />
        <input className='info' type="text" name='name' placeholder="Full Name"  />
        <label className='info'>DOB</label>
        <input type='date' placeholder='DOB' name='dob'/>
        <label className='info'>Gender</label>
        <input className='info' type='checkbox' name='male' placeholder='Male'/>
        <input className='info' type='checkbox' name='female' placeholder='Female'/>
        <input className='info' type='checkbox' name='other' placeholder='Other'/>
        <label className='info'>Pronouns</label>
        <select className='info'>
            <option >None</option>
            <option>she/her/hers</option>
            <option>he/him/his</option>
            <option>prefer not to say</option>
        </select>
        <input className='info' type="text" name='address' placeholder="Address"  />
        <input className='info' type="text" name='city' placeholder="City"  />
        <input className='info' type="text" name='state' placeholder="State/Province/Country"  />
        <input className='info' type="text" name='zipcode' placeholder="Postal/Zip Code"/>
        <Buttons />
        </form>
        </div>
    )
}
export default InformationForm