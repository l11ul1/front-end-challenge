import "./Styles/main-screen-styles.css";
import React from "react";
import NavigationBar from "./Components/NavigtionBarComponent";

const MainScreen: React.FC = () => {
	return (
		<div className="App">
			<NavigationBar />
		</div>
	);
};

export default MainScreen;
