import React, { useContext } from "react";
import { ModalContext } from "../../../helpers/ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalComponent: React.FC = () => {
	const context = useContext(ModalContext);
	if (context.isShown) {
		return (
			<div
				className="modal-container shown"
				onMouseDown={() => {
					context.setIsShown(false);
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
							className="btn-close"
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
