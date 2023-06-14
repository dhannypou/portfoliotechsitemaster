import React from "react";
import style from "./AboutUs.module.css";
import foto from "../../img/foto.jpg";

const AboutUs = () => {
	return (
		<section id={style.sobremi}>
			<div className={style["contenedor-foto"]}>
				<img src={foto} alt="holis" />
			</div>
			<div className={style.sobremi}>
				<p className={style["titulo-seccion"]}>Quiénes somos?</p>
				<h2>
					Hola Somos <span>TechSiteMaster</span>
				</h2>
				<h3>Impulsamos tu Negocio al Máximo</h3>
				<p>
					Somos una empresa dedicada a ofrecer soluciones innovadoras y de alta
					calidad en Marketing Digital. Con un equipo altamente capacitado y
					comprometido, brindamos servicios personalizados que se adaptan a las
					necesidades de nuestros clientes. Nuestra pasión por la excelencia y
					nuestra atención al detalle nos distinguen en la industria. Nos
					enorgullece colaborar estrechamente con nuestros clientes para lograr
					resultados sobresalientes y construir relaciones a largo plazo basadas
					en la confianza mutua. Confía en nosotros para impulsar tu negocio
					hacia el éxito.🌟 En TechSiteMaster, te ofrecemos productos/servicios
					de alta calidad que satisfacen tus necesidades. 💼💪 ✅ Contamos con
					un equipo de profesionales altamente capacitados y comprometidos que
					te brindarán el mejor servicio. 🤝👩‍💼👨‍💼 🌐 Con nuestra amplia
					experiencia en el mercado, garantizamos resultados excepcionales y
					soluciones personalizadas. 📈💡 💥 No pierdas la oportunidad de llevar
					tu negocio al siguiente nivel. ¡Confía en [Nombre de tu negocio] y
					alcanza el éxito que tanto deseas! 💯🚀
				</p>
				{/*  <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam a
            beatae natus.
        </p> */}
				{/* <a href="#">Download CV</a> */}
			</div>
		</section>
	);
};

export default AboutUs;
