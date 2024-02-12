import './HeaderPortfolio.css'

export default function PresentationPortfolio() {
	return (
		<>
			<section className="presentation">
				<div className="presentation-text">
					<h1 className="presentation-title">
						Hola!, soy <br /> Cristhian Salazar
					</h1>
					<p className="presentation-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum
						facilis atque hic dignissimos et corporis error id rem, qui enim
						eaque officia, nobis velit nisi ipsa vero nihil dolores!
					</p>
				</div>
				<div className='presentation-img-container'>
					<img
						src="src/assets/profile-img.png"
						className="presentation-profile-img"
					/>
				</div>
			</section>
		</>
	)
}
