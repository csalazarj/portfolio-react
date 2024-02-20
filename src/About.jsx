import './About.css'

export default function About() {
	return (
		<>
			<section className="about-section">

				<div className='about-text'>
					<h2 className="about-title">SOBRE MI</h2>
					<p className="about-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
						provident sequi ducimus veniam obcaecati cupiditate. Minima sint
						aliquid soluta pariatur exercitationem. Consequuntur quae
						consectetur voluptas beatae magni expedita, officiis facere.
					</p>
				</div>

				<div className="about-imgs-container">
					<img
						src="src/assets/about_img1.jpg"
						className="about-img"
					></img>
					<img
						src="src/assets/about_img2.jpg"
						className="about-img"
					></img>
					<img
						src="src/assets/about_img3.jpg"
						className="about-img"
					></img>
				</div>
			</section>
		</>
	)
}
