import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import CardComponent from "./CardComponent";

const useWindowSize = () => {
	const [size, setSize] = useState<number[]>([
		window.innerHeight,
		window.innerWidth,
	]);

	useEffect(() => {
		const handleResize = () => {
			setSize([window.innerHeight, window.innerWidth]);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return size;
};

const BodyComponent: React.FC = () => {
	let itemsToShow: number = 4;
	const [, width]: number[] = useWindowSize();
	if (width <= 1530) {
		itemsToShow = 3;
	}
	if (width <= 1350) {
		itemsToShow = 2;
	}
	if (width <= 870) {
		itemsToShow = 1;
	}
	return (
		<section className="main-page-body">
			<Carousel isRTL={false} itemsToShow={itemsToShow}>
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
