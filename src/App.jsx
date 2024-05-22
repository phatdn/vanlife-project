import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';
import './server';

import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="vans" element={<Vans />} />
			<Route path="vans/:id" element={<VanDetail />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
export default function App() {
	return <RouterProvider router={router} />;
}
