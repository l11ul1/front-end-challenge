import React from "react";
import Carousel from "react-elastic-carousel";
import CardComponent from "./CardComponent";
const BodyComponent: React.FC = () => {
	return (
		<section className="main-page-body">
			<Carousel isRTL={false} itemsToShow={3}>
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
			</Carousel>
		</section>
	);
};

export default BodyComponent;
