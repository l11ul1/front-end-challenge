import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavLinkComponent from "./NavLinkComponent";

const NavigationBar: React.FC = () => {
	const [date, setDate] = useState<Date | null | undefined>(new Date());
	return (
		<header>
			<nav className="nav-bar">
				<ul>
					<NavLinkComponent
						isLogo={true}
						link="https://shopify-challenge-front-end.herokuapp.com/"
						title=""
					/>
					<NavLinkComponent
						link="https://shopify-challenge-front-end.herokuapp.com/"
						title="Option One"
					/>
					<NavLinkComponent
						link="https://shopify-challenge-front-end.herokuapp.com/"
						title="Option Two"
					/>
					<NavLinkComponent
						link="https://shopify-challenge-front-end.herokuapp.com/"
						title="Option Three"
					/>
					<NavLinkComponent
						link="https://shopify-challenge-front-end.herokuapp.com/"
						title="Option Four"
					/>
				</ul>

				<div className="search-bar-nav">
					<DatePicker
						selected={date}
						onChange={(date) => setDate(date)}
						dateFormat={"dd/MM/yyyy"}
						maxDate={new Date()}
					/>
				</div>
			</nav>
		</header>
	);
};

export default NavigationBar;
