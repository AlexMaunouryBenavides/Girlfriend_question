import './Library.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import SheSaidYYes from './pages/SheSaidYYes';

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/yes" element={<SheSaidYYes />} />
		</Routes>
	);
}

export default App;
