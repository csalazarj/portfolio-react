// eslint-disable-next-line no-unused-vars
import ReactLayout from './ReactLayout'
import PresentationPortfolio from './HeaderPortfolio'
import Skills from './Skills'
import Navbar from './Navbar'
import ContactPortfolio from './ContactPortfolio'

function App() {
	return (
		<>
			{/* <ReactLayout /> */}
			<Navbar />
			<PresentationPortfolio />
			<Skills />
			<ContactPortfolio />
		</>
	)
}

export default App
