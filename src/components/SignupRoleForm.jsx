import React from 'react';
import Buttons from './BackSaveButton';
function SignupRoleForm(){
    return(
        <div>
        <h1>Your Role</h1>
        <h4>Please select the role that fits you!</h4>
     <form >
        <input type="checkbox" name='school'  />
        <input type="checkbox" name='cooporation' />
        <input type='checkbox' name='nonprofit'/>
        <input type='checkbox' name='other'/>
        <Buttons/>
      </form>
     
        </div>
    )
}
export default SignupRoleForm