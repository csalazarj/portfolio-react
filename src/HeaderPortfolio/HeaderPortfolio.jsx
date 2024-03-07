import './HeaderPortfolio.css'
import portfolioImg from '../assets/portfolio_img2_sf_1x1.png'

export default function PresentationPortfolio() {
	return (
		<>
			<div className="hero">
				<div className="hero-overlay">
					<section className="presentation-section">
						<div className="presentation-text">
							<h1 className="presentation-title">
								Hola!, soy <br /> <span>Cristhian</span>
							</h1>
							<p className="presentation-description">
								Desarrollador Web Junior
							</p>
							<div className="button-container">
								<a
									className="download-button"
									href="./CV_Cristhian_Salazar_J_2024.pdf"
									download
								>
									Descargar CV
								</a>
							</div>
						</div>
						<div className="presentation-img-container">
							<img
								src={portfolioImg}
								className="presentation-profile-img"
							/>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}
