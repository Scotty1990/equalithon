import React from 'react';
import Buttons from './BackSaveButton';
function InformationForm(){
    return(
        <div>
            <h1>Experience</h1>
            <h4>Fill out the form to get started</h4>
            <h6>*Indicates a required field</h6>
     <form >
        <label>Job Title</label>
        <input type="text" name='title' placeholder="Job Title"  />
        <label>Company</label>
        <input type="text" name='company' placeholder="Company"  />
        <label>Location</label>
        <input type="text" name='location' placeholder="Location"  />
        <label>I currently work here</label>
        <input type='checkbox' name='work'/>
        <label>From</label>
        <input type="date" name='fromdate'/>
        <label>To</label>
        <input type="date" name='todate'/>
        <label>Role Description</label>
        <input type='textarea' placeholder='Description' name='description'/>
        <button>Add Another</button>
        <label>Education</label>
        <label>Education 1</label>
        <label>School or University</label>
        <input type="text" name='school' placeholder="School/University"  />
        <label>Degree</label>
        <input type="text" name='degree' placeholder="High School or GED"  />
        <label>Field of Study</label>
        <input type="text" name='fieldstudy' placeholder="Field of Study"  />
        <button>Add Another</button>
        <label>Certifications</label>
        <label>Certification 1</label>
        <label>Certification</label>
        <input type="text" name='certification' placeholder="Certification"  />
        <label>Issued Date</label>
        <input type="date" name='issuedate'/>
        <label>Expiration date</label>
        <input type="date" name='expirationdate'/>
        <input type="file" name='file' placeholder="Upload"/>
        <button>Add Another</button>
        <label>Websites</label>
        <label>Add any relevant website. Format should be: http://</label>
        <label>Websites 1</label>
        <label>URL</label>
        <button>Add Another</button>
        <Buttons/>
        </form>
        </div>
    )
}
export default InformationForm