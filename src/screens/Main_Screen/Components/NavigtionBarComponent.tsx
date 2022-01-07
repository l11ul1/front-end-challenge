import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavLinkComponent from "./NavLinkComponent";

const NavigationBar: React.FC = () => {
	const [date, setDate] = useState<Date | null | undefined>(new Date());
	return (
		<nav className="nav-bar">
			<ul>
				<NavLinkComponent isLogo={true} link="" title="" />
				<NavLinkComponent
					link="http://localhost:3000/#"
					title="Option One"
				/>
				<NavLinkComponent
					link="http://localhost:3000/#"
					title="Option Two"
				/>
				<NavLinkComponent
					link="http://localhost:3000/#"
					title="Option Three"
				/>
				<NavLinkComponent
					link="http://localhost:3000/#"
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
	);
};

export default NavigationBar;
