import React from 'react';

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
        <button>Back</button>
        <button type="submit">Save and Continue</button>
      </form>
      <h4>Forgot password? Click here to reset</h4>
      <h1>OR</h1>
      <button>Create an Account</button>
        </div>
    )
}
export default SignupRoleForm