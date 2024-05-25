import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';
import './server';

import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import { requireAuth } from './utils';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="vans" loader={vansLoader} element={<Vans />} errorElement={<Error />} />
			<Route path="vans/:id" loader={vanDetailLoader} element={<VanDetail />} errorElement={<Error />} />
			<Route path="host" element={<HostLayout />}>
				<Route index loader={async () => await requireAuth()} element={<Dashboard />} />
				<Route path="income" loader={async () => await requireAuth()} element={<Income />} />
				<Route path="reviews" loader={async () => await requireAuth()} element={<Reviews />} />
				<Route path="vans" loader={hostVansLoader} element={<HostVans />} errorElement={<Error />} />
				<Route
					path="vans/:id"
					loader={hostVanDetailLoader}
					element={<HostVanDetail />}
					errorElement={<Error />}
				>
					<Route index loader={async () => await requireAuth()} element={<HostVanInfo />} />
					<Route path="photos" loader={async () => await requireAuth()} element={<HostVanPhotos />} />
					<Route path="pricing" loader={async () => await requireAuth()} element={<HostVanPricing />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
export default function App() {
	return <RouterProvider router={router} />;
}
