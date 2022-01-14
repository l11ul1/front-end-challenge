import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "../Types/Card";
import { ModalContext } from "../../../helpers/ModalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardComponent: React.FC<Card> = ({
	cardTitle,
	cardDescription,
	cardDate,
	cardImage,
}) => {
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const context = useContext(ModalContext);

	// Function to call the toast
	const callToast = () => {
		if (!isLiked) {
			toast("🚀 Liked!", {
				theme: "dark",
				position: "bottom-center",
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
			});
		} else {
			toast("💔 Disliked!", {
				theme: "dark",
				position: "bottom-center",
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
			});
		}
	};

	return (
		<>
			<div
				className="card"
				style={{ backgroundImage: `url(${cardImage})` }}
			>
				<div className="card-content">
					<h2 className="card-title">{cardTitle}</h2>
					<p className="card-body">{cardDescription}</p>
					<p className="card-date">{cardDate}</p>
					<button
						className={isLiked ? "liked" : "btn-like"}
						onClick={() => {
							setIsLiked(!isLiked);
							callToast();
						}}
					>
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
			<ToastContainer />
		</>
	);
};

export default CardComponent;
