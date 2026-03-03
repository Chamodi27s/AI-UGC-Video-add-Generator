import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generator from './pages/Generator';
import Plans from './pages/Plans';
import Community from './pages/Community';
import Result from './pages/Result';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/generator" element={<Generator />} />
				<Route path='/result/:projectId' element={<Result />} />
				<Route path="/plans" element={<Plans />} />
				<Route path="/community" element={<Community />} />
				
			</Routes>
			

			<Footer />
		</>
	);
}
export default App;