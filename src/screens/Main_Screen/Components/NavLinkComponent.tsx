import React from "react";
import Logo from "../../../assets/logo.svg";

type NavLinkProps = {
	link: string;
	title: string;
	isLogo?: boolean;
};

const NavLinkComponent: React.FC<NavLinkProps> = ({ title, link, isLogo }) => {
	if (isLogo === true) {
		return (
			<li className="logo">
				<img src={Logo} alt="logo" />
			</li>
		);
	} else {
		return (
			<li>
				<a href={link}>{title}</a>
			</li>
		);
	}
};

export default NavLinkComponent;
