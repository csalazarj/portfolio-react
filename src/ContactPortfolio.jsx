import './ContactPortfolio.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function ContactPortfolio() {
	return (
		<>
			<section className="contact">
				<h1 className="contact-title">Contact</h1>
				<ul className="contact-list-icons">
					<a href="www.linkedin.com/in/cristhiansj99">
						<li className="linkedin" target="_blank" rel="noreferrer">
							<FaLinkedin />
						</li>
					</a>
					<a
						href="https://github.com/csalazarj"
						target="_blank"
						rel="noreferrer"
					>
						<li className="github">
							<FaGithub />
						</li>
					</a>
					<a
						href="mailto:csalazar.red@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<li className="mail">
							<FaEnvelope />
						</li>
					</a>
				</ul>
			</section>
		</>
	)
}
