import './HeaderPortfolio.css'
// import { FaGamepad } from 'react-icons/fa'

export default function PresentationPortfolio() {
	return (
		<>
			<section className="presentation">
				<div className="presentation-text">
					<h1 className="presentation-title">
						Hola!, soy <br /> Cristhian Salazar
					</h1>
					<p className="presentation-description">
						Desarrollador Web Junior, Ingeniero de Sistemas de la Universidad
						nacional de Colombia y deportista de Rugby Subacuático
					</p>
				</div>
				<div className="presentation-img-container">
					<img
						src="src/assets/profile-img.png"
						className="presentation-profile-img"
					/>
					{/* <FaGamepad className='presentation-svg'/> */}
				</div>
			</section>
		</>
	)
}
