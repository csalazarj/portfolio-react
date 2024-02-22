import './About.css'

export default function About() {
	return (
		<>
			<section className="about-section">
				<div className="about-text">
					<h2 className="about-title">SOBRE MI</h2>
					<p className="about-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
						provident sequi ducimus veniam obcaecati cupiditate. Minima sint
						aliquid soluta pariatur exercitationem. Consequuntur quae
						consectetur voluptas beatae magni expedita, officiis facere.
					</p>
				</div>

				<div className="about-imgs-container">
					<div className='about-img-box'>
						<img src="src/assets/about_img1.jpg"></img>
					</div>
					<div className='about-img-box'>
						<img src="src/assets/about_img2.jpg"></img>
					</div>
					<div className='about-img-box'>
						<img src="src/assets/about_img3.jpg"></img>
					</div>
				</div>
			</section>
		</>
	)
}
