import './ContactPortfolio.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function ContactPortfolio() {
	return (
		<>
			<section className="contact-section">
				<article className="contact-list-icons">
					<div className="contact-box">
						<span>www.linkedin.com/in/cristhiansj99</span>
						<a
							href="https://linkedin.com/in/cristhiansj99"
							target="_blank"
							rel="noreferrer"
						>
							<div className="contact-icon linkedin">
								<FaLinkedin />
							</div>
						</a>
					</div>
					<div className="contact-box">
						<span>https://github.com/csalazarj</span>
						<a
							href="https://github.com/csalazarj"
							target="_blank"
							rel="noreferrer"
						>
							<div className="contact-icon github">
								<FaGithub />
							</div>
						</a>
					</div>

					<div className="contact-box">
						<span>csalazar.red@gmail.com</span>
						<a
							href="mailto:csalazar.red@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<div className="contact-icon mail">
								<FaEnvelope />
							</div>
						</a>
					</div>
				</article>
			</section>
		</>
	)
}
