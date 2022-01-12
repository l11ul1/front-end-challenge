import React, { useContext } from "react";
import { ModalContext } from "../../../helpers/ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalComponent: React.FC = () => {
	const context = useContext(ModalContext);
	if (context.isShown) {
		return (
			<div
				className="modal-container"
				style={{
					visibility: "visible",
					opacity: "1",
					transitionDuration: "0.8s",
					transitionProperty: "visibility, opacity",
				}}
			>
				<div
					className="card"
					style={{
						backgroundImage: `url(${context.card.cardImage})`,
					}}
				>
					<div className="card-content">
						<h2>{context.card.cardTitle}</h2>
						<p>{context.card.cardDescription}</p>
						<button
							className="closeBtn"
							onClick={() => {
								context.setIsShown(false);
							}}
						>
							<FontAwesomeIcon icon={faTimes} /> Close
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return <div className="modal-container hidden"></div>;
	}
};

export default ModalComponent;
