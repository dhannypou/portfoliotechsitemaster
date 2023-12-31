import React, { useRef } from "react";
import style from "./landing.module.css";
// import { seleccionar, responsiveMenu } from "../../utilis/Scrips";
import iconTSM from "../../icons/icon TSM.jpg";

const Landing = () => {
	let anchorSt = useRef();
	let anchorAb = useRef();
	let anchorSv = useRef();
	let anchorSk = useRef();
	let anchorCtc = useRef();
	let anchorPf = useRef();

	function handleScroll(ref) {
		if (ref === anchorSt) {
			window.scrollTo(0, 0);
		} else if (ref === anchorAb) {
			window.scrollTo(0, 650);
		} else if (ref === anchorSv) {
			window.scrollTo(0, 1400);
		} else if (ref === anchorSk) {
			window.scrollTo(0, 2250);
		} else if (ref === anchorCtc) {
			window.scrollTo(0, 3850);
		} else if (ref === anchorPf) {
			window.scrollTo(0, 2550);
		}
	}

	return (
		<section id={style.inicio}>
			<div className={style.contenido}>
				<header>
					<div className={style["contenido-header"]}>
						<img
							onClick={() => handleScroll(anchorSt)}
							className={style.icon}
							src={iconTSM}
						/>
						<nav id={style.nav}>
							<ul id={style.links}>
								<li>
									<button
										className={style.seleccionado}
										id="start"
										ref={anchorSt}
										onClick={() => handleScroll(anchorSt)}
									>
										INICIO
									</button>
								</li>
								<li>
									<button
										className={style.seleccionado}
										id="about"
										ref={anchorAb}
										onClick={() => handleScroll(anchorAb)}
									>
										QUIENES SOMOS
									</button>
								</li>
								<li>
									<button
										className={style.seleccionado}
										id="services"
										ref={anchorSv}
										onClick={() => handleScroll(anchorSv)}
									>
										NUESTROS SERVICIOS
									</button>
								</li>
								<li>
									<button
										className={style.seleccionado}
										id="portfolio"
										ref={anchorSk}
										onClick={() => handleScroll(anchorSk)}
									>
										HABILIDADES
									</button>
								</li>
								<li>
									<button
										className={style.seleccionado}
										id="contact"
										ref={anchorCtc}
										onClick={() => handleScroll(anchorCtc)}
									>
										CONTACTOS
									</button>
								</li>
							</ul>
						</nav>

						{/*  Icono del menu responsive */}

						<div id={style["icono-nav"]}>
							<i className="fa-solid fa-bars"></i>
						</div>

						<div className={style.redes}>
							{/* <a href="#">
								<i className="fa-brands fa-youtube"></i>
							</a>
							<a href="#">
								<i className="fa-brands fa-facebook"></i>
							</a>
							<a href="#">
								<i className="fa-brands fa-instagram-square"></i>
							</a> */}
						</div>
					</div>
				</header>
				<div className={style.presentacion}>
					<p className={style.bienvenida}>Bienvenidos</p>
					<h2>
						Somos un <span>Equipo de Marketing Digital</span>, TECHSITEMASTER
					</h2>
					<p className={style.descripcion}>
						"ofrecemos productos/servicios de alta calidad que satisfacen tus
						necesidades"
					</p>
					<a
						ref={anchorPf}
						href="#portfolio"
						onClick={() => handleScroll(anchorPf)}
					>
						Ir a la cartera
					</a>
				</div>
			</div>
		</section>
	);
};

export default Landing;
