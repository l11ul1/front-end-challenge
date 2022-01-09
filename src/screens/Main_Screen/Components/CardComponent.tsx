import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const CardComponent: React.FC = () => {
	return (
		<div className="card">
			<div className="card-content">
				<h2 className="card-title">Name of the card</h2>
				<p className="card-body">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptates fuga maiores laboriosam quia quae?
				</p>
				<p className="card-date">Date: 01.02.2022</p>
				<button className="btn-like">
					<FontAwesomeIcon icon={faMeteor} />
				</button>
				<button className="btn-info">
					<FontAwesomeIcon icon={faInfoCircle} />
					More
				</button>
			</div>
		</div>
	);
};

export default CardComponent;
