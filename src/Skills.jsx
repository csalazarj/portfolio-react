import './Skills.css'
import { FaReact, FaCss3, FaHtml5, FaJs, FaNodeJs } from 'react-icons/fa'
import { IconContext } from 'react-icons'

export default function Skills() {
	return (
		<>
			<section className="skills-section">
				<h2 className="skills-title">HABILIDADES</h2>
				{/* <ul className="skills-list">
					<li className="skill-item">HTML</li>
					<li className="skill-item">CSS</li>
					<li className="skill-item">JavaScript</li>
					<li className="skill-item">NodeJS</li>
					<li className="skill-item">PHP</li>
					<li className="skill-item">React</li>
					<li className="skill-item">SQL</li>
					<li className="skill-item">MongoDB</li>
				</ul> */}

				<div className="skills-list">
					<div className="skill-card">
						<IconContext.Provider value={{ className: 'html-icon' }}>
							<FaHtml5 />
						</IconContext.Provider>
						<h3>HTML</h3>
					</div>
					<div className="skill-card">
						<IconContext.Provider value={{ className: 'css-icon' }}>
							<FaCss3 />
						</IconContext.Provider>
						<h3>CSS</h3>
					</div>
					<div className="skill-card">
						<IconContext.Provider value={{ className: 'js-icon' }}>
							<FaJs />
						</IconContext.Provider>
						<h3>JavaScript</h3>
					</div>
					<div className="skill-card">
						<IconContext.Provider value={{ className: 'react-icon' }}>
							<FaReact />
						</IconContext.Provider>
						<h3>React</h3>
					</div>
					<div className="skill-card">
						<IconContext.Provider value={{ className: 'nodejs-icon' }}>
							<FaNodeJs />
						</IconContext.Provider>
						<h3>NodeJS</h3>
					</div>
				</div>
			</section>
		</>
	)
}
