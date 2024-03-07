/* eslint-disable no-unused-vars */
// import Navbar from './Navbar'
import PresentationPortfolio from './HeaderPortfolio/HeaderPortfolio'
import About from './About/About'
import Skills from './Skills/Skills'
import FooterPortfolio from './FooterPortfolio/FooterPortfolio'
import ContactPortfolio from './ContactPortfolio/ContactPortfolio'

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<PresentationPortfolio />
			<About />
			<Skills />
			<ContactPortfolio />
			<FooterPortfolio />
		</>
	)
}

export default App
