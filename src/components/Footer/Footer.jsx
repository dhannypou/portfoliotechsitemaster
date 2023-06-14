import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
	return (
		<footer>
			<p>Todos los derechos reservados - 2023</p>
			<div className={style.redes}>
				<a href="https://www.youtube.com/channel/UCBgj1ILi3Qt9zOMG2LhuyDg">
					<i className="fa-brands fa-youtube"></i>
				</a>
				<a href="https://www.facebook.com/dhannypou/">
					<i className="fa-brands fa-facebook"></i>
				</a>
				<a href="https://www.instagram.com/techsitemaster/">
					<i className="fa-brands fa-instagram-square"></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
