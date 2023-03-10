import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkStyle = {
	color: "var(--white)",
	fontSize:"1.24rem", 
	fontWeight:400, 
	lineHeight: "15px",
	cursor: "pointer"
};

function Main() {
	return (
		<div className="bcard__body">

			<div className="bcard__heading-wrapper">
				<h1 className="bcard__name">Melih Ünver</h1>
				<h2 className="bcard__title">Web3 Developer</h2>
				<div className="bcard__website">
					<a style= { LinkStyle } href="https://uenvermelih.io" target="__blank">uenvermelih.io</a>
				</div>
			</div>

			<div className="bcard__btn-wrapper">
				<a href="mailto:alperenweb3@gmail.com" target="__blank"><button className="bcard__btn bcard__btn--email"><FontAwesomeIcon className="bcard__btn-icon" icon={faEnvelope}></FontAwesomeIcon>Email</button></a>
				<a href="https://www.linkedin.com/in/melih-%C3%BCnver-a6b399175/" target="__blank"><button className="bcard__btn bcard__btn--linkedin"><FontAwesomeIcon className="bcard__btn-icon" icon={faLinkedin}></FontAwesomeIcon>
Linkedin</button></a>
			</div>

			<div className="bcard__text-wrapper">
				<div className="bcard__about">
					<h3 className="bcard__heading">About</h3>
					<p className="bcard__text"><span role="img" aria-label="hand-signs"></span> #webdeveloper #webdesigner #blockchaindeveloper #selflearner</p>
				</div>
				<div className="bcard__interests">
					<h3 className="bcard__heading">Interests</h3>
					<p className="bcard__text">Web3, Blockchain, Boxing, Travel</p>
				</div>
			</div>	
		</div>
	);
}
  
export default Main;