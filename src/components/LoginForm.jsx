import React from 'react';

function LoginForm(){
    return(
        <div>
     <form >
        <input type="text" name='username' placeholder="username"  />
        <input type="text" name='password' placeholder="Password"  />
        <button type="submit">Log In</button>
      </form>
      <h4>Forgot password? Click here to reset</h4>
      <h1>OR</h1>
      <button>Create an Account</button>
        </div>
    )
}
export default LoginForm