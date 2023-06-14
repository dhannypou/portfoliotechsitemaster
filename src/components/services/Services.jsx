import React from "react";
import style from "./Services.module.css";

const Services = () => {
	return (
		<section id={style.servicios}>
			<h3 className={style["titulo-seccion"]}>NUESTROS SERVICIOS</h3>
			<div className={style.fila}>
				<div className={style.servicio}>
					<span className={style.icono}>
						<i className="fa-solid fa-code"></i>
					</span>
					<h4>Diseño web</h4>
					<hr />
					<ul className={style["servicios-tag"]}>
						<li>Web</li>
						<li>Gráfico</li>
						<li>SEO</li>
					</ul>
					<p>Creación de sitios web visualmente atractivos y funcionales.</p>
				</div>
				<div className={style.servicio}>
					<span className={style.icono}>
						<i className="fa-solid fa-file-code"></i>
					</span>
					<h4>Aplicaciones móviles</h4>
					<hr />
					<ul className={style["servicios-tag"]}>
						<li>Web</li>
						<li>Gráfico</li>
						<li>SEO</li>
					</ul>
					<p>Desarrollo de aplicaciones móviles intuitivas y eficaces.</p>
				</div>
				<div className={style.servicio}>
					<span className={style.icono}>
						<i className="fa-solid fa-arrow-trend-up"></i>
					</span>
					<h4>Posicionamiento SEO</h4>
					<hr />
					<ul className={style["servicios-tag"]}>
						<li>Web</li>
						<li>Gráfico</li>
						<li>SEO</li>
					</ul>
					<p>Mayor visibilidad y posicionamiento en buscadores.</p>
				</div>
			</div>
			<div className={style.fila}>
				<div className={style.servicio}>
					<span className={style.icono}>
						<i className="fa-solid fa-database"></i>
					</span>
					<h4>Alojamiento web</h4>
					<hr />
					<ul className={style["servicios-tag"]}>
						<li>Web</li>
						<li>Gráfico</li>
						<li>SEO</li>
					</ul>
					<p>Alojamiento seguro y fiable de su sitio web.</p>
				</div>
				<div className={style.servicio}>
					<span className={style.icono}>
						<i className="fa-solid fa-palette"></i>
					</span>
					<h4>Diseño gráfico</h4>
					<hr />
					<ul className={style["servicios-tag"]}>
						<li>Web</li>
						<li>Gráfico</li>
						<li>SEO</li>
					</ul>
					<p>Creación de diseños atractivos y funcionales para las marcas.</p>
				</div>
				<div className={style.servicio}>
					<span className={style.icono}>
						<i className="fa-solid fa-person-circle-question"></i>
					</span>
					<h4>Consultor externo</h4>
					<hr />
					<ul className={style["servicios-tag"]}>
						<li>Web</li>
						<li>Gráfico</li>
						<li>SEO</li>
					</ul>
					<p>Asesoramiento experto para optimizar su negocio.</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
