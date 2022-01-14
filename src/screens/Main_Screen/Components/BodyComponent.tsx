import axios from "axios";
import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import CardComponent from "./CardComponent";
import Card from "../Types/Card";
import BeatLoader from "react-spinners/BeatLoader";
import ModalComponent from "./ModalComponent";
import { ModalContextProvider } from "../../../helpers/ModalContext";

// Custom hook to get the size of the window
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

// Body Component contains the carousel with images
const BodyComponent: React.FC = () => {
	let itemsToShow: number = 4;
	const [, width]: number[] = useWindowSize();
	const [images, setImages] = useState<Card[]>([]);
	const [loaded, setLoaded] = useState<Boolean>(false);
	const [isError, setIsError] = useState<Boolean>(false);

	// Function to fetch the images from the API
	const getImages = () => {
		axios
			.get("https://api.nasa.gov/planetary/apod", {
				params: {
					count: 10,
					thumbs: "false",
					api_key: "9fEd6kIexQo0OIrav2kiuhiCnGTdGotY0lugdN5d",
				},
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			})
			.then((response) => {
				let temp: Card[] = [];
				response.data.forEach((i: any) => {
					const card: Card = {
						cardTitle: i.title,
						cardDescription: i.explanation,
						cardDate: i.date,
						cardImage: i.url,
					};
					temp.push(card);
				});
				setImages(temp);
				setLoaded(true);
			})
			.catch((e) => {
				console.log(e);
				setLoaded(false);
				setIsError(true);
			});
	};

	useEffect(() => {
		getImages();
	}, []);

	// Set items to show depending on the width of the screen
	if (width <= 1530) {
		itemsToShow = 3;
	}
	if (width <= 1350) {
		itemsToShow = 2;
	}
	if (width <= 870) {
		itemsToShow = 1;
	}

	if (loaded === true) {
		return (
			<section className="main-page-body">
				<ModalContextProvider>
					<Carousel isRTL={false} itemsToShow={itemsToShow}>
						{images.map((img, i) => (
							<CardComponent
								key={i}
								cardImage={img.cardImage}
								cardDate={img.cardDate}
								cardDescription={img.cardDescription}
								cardTitle={img.cardTitle}
							/>
						))}
					</Carousel>
					<ModalComponent></ModalComponent>
				</ModalContextProvider>
			</section>
		);
	} else {
		return (
			<section className="main-page-body disabled-dots">
				<Carousel isRTL={false} itemsToShow={itemsToShow}>
					<div className="card" style={{ backgroundImage: "none" }}>
						<BeatLoader color="#424242" size={30} />
					</div>
				</Carousel>
			</section>
		);
	}
};

export default BodyComponent;
