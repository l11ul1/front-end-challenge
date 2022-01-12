import React, { useContext } from "react";
import { ModalContext } from "../../../helpers/ModalContext";

const ModalComponent: React.FC = () => {
	const context = useContext(ModalContext);
	console.log(context.isShown);
	if (context.isShown) {
		return (
			<div className="modal-container">
				<div
					className="modal"
					style={{
						backgroundImage: `url(${context.card.cardImage})`,
					}}
				>
					<div className="modal-filter">
						<div className="modal-information">
							<h1>{context.card.cardTitle}</h1>
							<p>{context.card.cardDescription}</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default ModalComponent;
