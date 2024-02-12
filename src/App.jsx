// eslint-disable-next-line no-unused-vars
import ReactLayout from './ReactLayout'
import PresentationPortfolio from './HeaderPortfolio'
import Skills from './Skills'
import Navbar from './Navbar'

function App() {
	return (
		<>
			{/* <ReactLayout /> */}
			<Navbar/>
			<PresentationPortfolio />
			<Skills />
		</>
	)
}

export default App
