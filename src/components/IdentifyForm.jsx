import React from 'react';
import Buttons from './BackSaveButton';
function IdentifyForm(){
    return(
        <div className='idform'>
            <h1>Self Identity</h1>
            <h4>Fill out the form to get started</h4>
            <h6>*Indicates a required field</h6>
     <form >
        <label className='id'>Race</label>
        <select className='id'>
            <option>Select one</option>
            <option>White</option>
            <option>Black or African American</option>
            <option>Asian</option>
            <option>Native Hawaiian or Other Pacific Islander</option>
            <option>Some Other Race</option>
        </select>
        <label className='id'>Ethnicity</label>
        <select className='id'>
            <option>Select one</option>
            <option>Hispanic</option>
            <option>Latino</option>
            <option>Not of Hispanic, Spanish or Latino origin</option>
        </select>
        <label className='id'>Lamguage</label>
        <input className='id' type="text" name='language' placeholder="Language"/>
        <label className='id'>Language Proficiency</label>
        <select className='id'>
            <option>Select one</option>
            <option>Elementary</option>
            <option>Professional</option>
            <option>Full Professional</option>
            <option>Primary Fluency</option>
        </select>
        <button className='id'>Add Another</button>
        <Buttons/>
        </form>
        </div>
    )
}
export default IdentifyForm