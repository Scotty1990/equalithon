import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import PostList from "../components/PostList";
import { API_BASE } from "../constants";
import ProfileMain from "../components/profileMain/ProfileMain"
import SecondaryProfile from "../components/profileMain/SecondaryProfile";

export function Profile() {
	const { user, setMessages } = useOutletContext();
	const [posts, setPosts] = useState([]);
	const [name, setName] = useState('Your Name')
	const [phone, setPhone] = useState('+5959 999 999')
	const [email, setEmail] = useState('email@email.com')
	const [address, setAddress] = useState('Asunción, Paraguay')

	useEffect(() => {
		fetch(API_BASE + "/api/profile", { credentials: "include" })
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	if (!user) return null;

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			body: new FormData(form),
			credentials: "include"
		});
		const json = await response.json();
		if (json.messages) setMessages(json.messages);
		if (json.post) {
			setPosts([...posts, json.post]);
			form.reset();
		}
	};

	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-6">
					<ProfileMain name={name} phone={phone} email={email} address={address}/>
				</div>
				<div className="col-6">
					<SecondaryProfile/>
				</div>
				
			</div>
		</div>
	)
}