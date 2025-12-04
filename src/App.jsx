import Nav from "./components/layout/Nav";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'


const App = () => {
	return (
		 <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
	);
};

export default App;
