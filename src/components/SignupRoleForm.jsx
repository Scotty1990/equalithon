import React from 'react';
import Buttons from './BackSaveButton';
function SignupRoleForm(){
    return(
        <div className='roleform'>
        <h1 className='role'>Your Role</h1>
        <h4 className='role'>Please select the role that fits you!</h4>
     <form >
        <input className='role' type="checkbox" name='school'  />
        <input className='role' type="checkbox" name='cooporation' />
        <input className='role' type='checkbox' name='nonprofit'/>
        <input className='role' type='checkbox' name='other'/>
        <Buttons/>
      </form>
     
        </div>
    )
}
export default SignupRoleForm