import './About.css'

export default function About() {
	return (
		<>
			<section className="about-section">
				<div className="about-header">
					<h2 className="about-title">SOBRE MI</h2>
					<p className="about-description">
						Me graduade en Ingeniería de Sistemas en la Universidad Nacional
						de Colombia, con un fuerte enfoque en el desarrollo de aplicaciones
						web. Mi educación y curiosidad me impulsan a buscar soluciones
						tecnológicas innovadoras para los problemas de mis clientes.
					</p>
				</div>

				<div className="about-imgs-container">
					<div className="about-img-box">
						<img src="src/assets/about_img1.jpg"></img>
						<p>
							Además de mi carrera en tecnología, tengo años de experiencia como
							editor de videos, una habilidad que he aplicado extensivamente en
							el canal de YouTube de mi club de rugby subacuático. Esta
							experiencia me ha permitido fusionar mi pasión por el deporte con
							mi amor por la narrativa visual.
						</p>
					</div>
					<div className="about-img-box">
						<img src="src/assets/about_img2.jpg"></img>
						<p>
							Como desarrollador y editor de videos, valoro la precisión, la
							creatividad y el trabajo en equipo, tanto en el ámbito digital
							como en el deportivo. Estoy siempre en busca de nuevas formas de
							combinar mis habilidades técnicas con mi creatividad para crear
							proyectos únicos y atractivos.
						</p>
					</div>
					<div className="about-img-box">
						<img src="src/assets/about_img3.jpg"></img>
						<p>
							¡Bienvenidos a mi rincón digital, donde la innovación, la
							determinación y la creatividad se encuentran para crear algo único
							y memorable!
						</p>
					</div>
				</div>
			</section>
		</>
	)
}
