
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Layout from './Layout/Layout';
import { ContextProvider } from './Components/utils/global.context';

function App() {
  return (
		<div className="App">
			<ContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="contacto" element={<Contact />} />
							<Route path="dentista/:id" element={<Detail />} />
							<Route path="favs" element={<Favs />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ContextProvider>
		</div>
	);
}

export default App;
