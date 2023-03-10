import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer() {
	return (
		<div className="bcard__footer">
			<a className="bcard__footer-icon" href="https://twitter.com/uenvermelih" target="__blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
			<a className="bcard__footer-icon" href="https://facebook.com/" target="__blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
			<a className="bcard__footer-icon" href="https://instagram.com/uenvermelih" target="__blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
			<a className="bcard__footer-icon" href="https://github.com/uenvermelih" target="__blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
		</div>
	);
}
   
export default Footer;