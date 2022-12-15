import React from 'react';

function LoginForm(){
    return(
        <div className='logform'>
     <form >
        <input className='log' type="text" name='username' placeholder="username"  />
        <input className='log'type="text" name='password' placeholder="Password"  />
        <button className='log' type="submit">Log In</button>
      </form>
      <h4 className='log'>Forgot password? Click here to reset</h4>
      <h1 className='log'>OR</h1>
      <button className='log'>Create an Account</button>
        </div>
    )
}
export default LoginForm