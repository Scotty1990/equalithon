import React from 'react';
import Buttons from './BackSaveButton';
function InformationForm(){
    return(
        <div className='exform'>
            <h1 className='ex'>Experience</h1>
            <h4 className='ex'>Fill out the form to get started</h4>
            <h6 className='ex'>*Indicates a required field</h6>
     <form >
        <label className='ex'>Job Title</label>
        <input className='ex'type="text" name='title' placeholder="Job Title"  />
        <label className='ex'>Company</label>
        <input className='ex' type="text" name='company' placeholder="Company"  />
        <label className='ex'>Location</label>
        <input className='ex' type="text" name='location' placeholder="Location"  />
        <label className='ex'>I currently work here</label>
        <input className='ex' type='checkbox' name='work'/>
        <label className='ex'>From</label>
        <input className='ex' type="date" name='fromdate'/>
        <label className='ex'>To</label>
        <input className='ex' type="date" name='todate'/>
        <label className='ex'>Role Description</label>
        <input className='ex' type='textarea' placeholder='Description' name='description'/>
        <button className='ex'>Add Another</button>
        <label className='ex'>Education</label>
        <label className='ex'>Education 1</label>
        <label className='ex'>School or University</label>
        <input className='ex' type="text" name='school' placeholder="School/University"  />
        <label className='ex'>Degree</label>
        <input className='ex' type="text" name='degree' placeholder="High School or GED"  />
        <label className='ex'>Field of Study</label>
        <input className='ex' type="text" name='fieldstudy' placeholder="Field of Study"  />
        <button className='ex'>Add Another</button>
        <label className='ex'>Certifications</label>
        <label className='ex'>Certification 1</label>
        <label className='ex'>Certification</label>
        <input className='ex' type="text" name='certification' placeholder="Certification"  />
        <label className='ex'>Issued Date</label>
        <input className='ex' type="date" name='issuedate'/>
        <label className='ex'>Expiration date</label>
        <input className='ex' type="date" name='expirationdate'/>
        <input className='ex' type="file" name='file' placeholder="Upload"/>
        <button className='ex'>Add Another</button>
        <label className='ex'>Websites</label>
        <label className='ex'>Add any relevant website. Format should be: http://</label>
        <label className='ex'>Websites 1</label>
        <label className='ex'>URL</label>
        <button className='ex'>Add Another</button>
        <Buttons/>
        </form>
        </div>
    )
}
export default InformationForm