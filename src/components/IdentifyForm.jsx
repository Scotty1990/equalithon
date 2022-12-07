import React from 'react';
import Buttons from './BackSaveButton';
function IdentifyForm(){
    return(
        <div>
            <h1>Self Identity</h1>
            <h4>Fill out the form to get started</h4>
            <h6>*Indicates a required field</h6>
     <form >
        <label>Race</label>
        <select>
            <option>Select one</option>
            <option>White</option>
            <option>Black or African American</option>
            <option>Asian</option>
            <option>Native Hawaiian or Other Pacific Islander</option>
            <option>Some Other Race</option>
        </select>
        <label>Ethnicity</label>
        <select>
            <option>Select one</option>
            <option>Hispanic</option>
            <option>Latino</option>
            <option>Not of Hispanic, Spanish or Latino origin</option>
        </select>
        <label>Lamguage</label>
        <input type="text" name='language' placeholder="Language"/>
        <label>Language Proficiency</label>
        <select>
            <option>Select one</option>
            <option>Elementary</option>
            <option>Professional</option>
            <option>Full Professional</option>
            <option>Primary Fluency</option>
        </select>
        <button>Add Another</button>
        <Buttons/>
        </form>
        </div>
    )
}
export default IdentifyForm