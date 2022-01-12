import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "../Types/Card";
import { ModalContext } from "../../../helpers/ModalContext";

const CardComponent: React.FC<Card> = ({
	cardTitle,
	cardDescription,
	cardDate,
	cardImage,
}) => {
	const context = useContext(ModalContext);
	return (
		<div className="card" style={{ backgroundImage: `url(${cardImage})` }}>
			<div className="card-content">
				<h2 className="card-title">{cardTitle}</h2>
				<p className="card-body">{cardDescription}</p>
				<p className="card-date">{cardDate}</p>
				<button className="btn-like">
					<FontAwesomeIcon icon={faMeteor} />
				</button>
				<button
					className="btn-info"
					onClick={() => {
						const card: Card = {
							cardTitle: cardTitle,
							cardDescription: cardDescription,
							cardDate: cardDate,
							cardImage: cardImage,
						};
						context.setIsShown(!context.isShown);
						context.setCard(card);
					}}
				>
					<FontAwesomeIcon icon={faInfoCircle} />
					More
				</button>
			</div>
		</div>
	);
};

export default CardComponent;
