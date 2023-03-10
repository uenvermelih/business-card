import React from "react";
import ProfileImg from "../images/uenpic.JPG";
import "./Header.css";

function Header() {
	return (
		<div className="bcard__header">
			<img className="bcard__profile-img" src={ProfileImg} alt="Melih Ünver Profile" />
		</div>
	);
}

export default Header;
