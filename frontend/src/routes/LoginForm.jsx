import React from 'react';
import '../App.css';
import { useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";

function LoginForm(){
  const { setUser, setMessages } = useOutletContext();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			body: new URLSearchParams(new FormData(form)),
			credentials: "include"
		});
		const json = await response.json();
		if (json.messages) setMessages(json.messages);
		if (json.user) {
			setUser(json.user);
			navigate("/home");
		}
	};

    return(
        <div>
     <form action="/login" method="POST" onSubmit={handleSubmit}>
        <input 
          type="email"
					className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"  
          />
        <input 
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"  
        />
        <button 
        type="submit">Log In</button>
      </form>
      <h4>Forgot password? Click here to reset</h4>
      <h1>OR</h1>
      <button>Create an Account</button>
        </div>
    )
}
export default LoginForm