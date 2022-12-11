import { Link } from "react-router-dom";

const PostPreview = ({ _id, image, caption }) => <li className="col-6 justify-content-between mt-5">
	<Link to={`/post/${_id}`}>
		<img className="img-fluid" src={image} alt={caption} />
	</Link>
</li>

export default PostPreview;