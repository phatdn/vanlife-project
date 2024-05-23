import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';
import './server';

import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="vans" element={<Vans />} />
			<Route path="vans/:id" element={<VanDetail />} />
			<Route path="host" element={<HostLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="income" element={<Income />} />
				<Route path="reviews" element={<Reviews />} />
				<Route path="vans" element={<HostVans />} />
				<Route path="vans/:id" element={<HostVanDetail />}>
					<Route index element={<HostVanInfo />} />
					<Route path="photos" element={<HostVanPhotos />} />
					<Route path="pricing" element={<HostVanPricing />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
export default function App() {
	return <RouterProvider router={router} />;
}
