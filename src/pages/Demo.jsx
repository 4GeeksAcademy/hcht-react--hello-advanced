import { Link } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useStore } from "../hooks/useStore";


export const Demo = () => {
	const store = useStore();
	const { changeColor } = useActions();
	// Note: as we see in the Single view, we can use the destructuring form for our code.

	return (
		<div className="container">
			<ul className="list-group">
				{store && store.demo?.map((item, index) => {
					return (
						<li key={index} className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={`/single/${index}`}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Open file ./actions.js to see the action code that is updating this color
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};