import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import PostList from "../components/PostList";
import { API_BASE } from "../constants";

export function Profile() {
	const { user, setMessages } = useOutletContext();

	const [posts, setPosts] = useState([]);

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
		<div className="container bg-sky-800">
			<div className="row mt-5">
				<div className="col-6">
					<div className="flex flex-col w-full">
						<div className="mt-2 grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  						<div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
  						<div className="divider"></div> 
  						<div className="mt-2 grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
						<div className="divider color-black"></div>
						<div className="mt-2 grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
  						<div className="divider"></div> 
						<div className="mt-2 grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
					</div>
					<div className="mt-5">
						<h2>Add a post</h2>
						<form action="/api/post/createPost" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="title" className="form-label">Title</label>
								<input type="text" className="form-control" id="title" name="title" />
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">Caption</label>
								<textarea className="form-control" id="caption" name="caption"></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="imgUpload" className="form-label">Image</label>
								<input type="file" className="form-control" id="imageUpload" name="file" />
							</div>
							<button type="submit" className="btn btn-primary" value="Upload">Submit</button>
						</form>
					</div>
				</div>
				<div className="col-6">
					<PostList posts={posts} />
					<div className="row justify-content-center mt-5">
						<Link className="btn btn-primary" to="/feed">Return to Feed</Link>
					</div>
				</div>
			</div>
		</div>
	)
}