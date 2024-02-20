import './HeaderPortfolio.css'

export default function PresentationPortfolio() {
	return (
		<>
			<section className="presentation-section">
				<div className="presentation-text">
					<h1 className="presentation-title">
						Hola!, soy <br /> <span>Cristhian</span>
					</h1>
					<p className="presentation-description">
						Desarrollador Web Junior, Ingeniero de Sistemas de la Universidad
						nacional de Colombia y deportista de Rugby Subacuático
					</p>
				</div>
				<div className="presentation-img-container">
					<img
						src="src/assets/portfolio_img2_sf_1x1.png"
						className="presentation-profile-img"
					/>
				</div>
			</section>
		</>
	)
}
