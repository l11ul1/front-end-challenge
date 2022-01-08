import "./Styles/main-screen-styles.css";
import React from "react";
import NavigationBar from "./Components/NavigtionBarComponent";
import BodyComponent from "./Components/BodyComponent";
const MainScreen: React.FC = () => {
	return (
		<div className="App">
			<NavigationBar />
			<BodyComponent />
		</div>
	);
};

export default MainScreen;
