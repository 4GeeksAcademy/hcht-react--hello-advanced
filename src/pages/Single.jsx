import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { useStore } from "../hooks/useStore";


export const Single = (props) => {
	const { demo } = useStore();
	const { theId } = useParams();

	return (
		<div className="container text-center">
			<h1 className="display-4">This will show the demo element: {demo[theId].title}</h1>
			<img src={rigoImageUrl} />
			<hr className="my-4" />
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};


Single.propTypes = {
	match: PropTypes.object
};
