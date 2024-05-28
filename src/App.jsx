import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';
import './server';

import Layout from './components/Layout';
import About from './pages/About';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login';
import Home from './pages/Home';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Dashboard, {loader as dashboardLoader} from './pages/Host/Dashboard';
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
			<Route 
				path="login" 
				loader={loginLoader} 
				action={loginAction} 
				element={<Login />} 
			/>
			<Route 
				path="vans" 
				loader={vansLoader} 
				element={<Vans />} 
				errorElement={<Error />} 
			/>
			<Route 
				path="vans/:id" 
				loader={vanDetailLoader} 
				element={<VanDetail />} 
				errorElement={<Error />} 
			/>
			<Route path="host" element={<HostLayout />}>
				<Route 
					index 
					element={<Dashboard />} 
					loader={dashboardLoader} 
					/>
				<Route 
					path="income" 
					element={<Income />} 
					loader={async ({ request }) => await requireAuth(request)} 
					/>
				<Route
					path="reviews"
					element={<Reviews />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route 
					path="vans" 
					loader={hostVansLoader} 
					element={<HostVans />} 
					errorElement={<Error />} 
				/>
				<Route
					path="vans/:id"
					loader={hostVanDetailLoader}
					element={<HostVanDetail />}
					errorElement={<Error />}
				>
					<Route 
						index 
						element={<HostVanInfo />} 
						loader={async ({ request }) => await requireAuth(request)} 
					/>
					<Route
						path="photos"
						element={<HostVanPhotos />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="pricing"
						element={<HostVanPricing />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
export default function App() {
	return <RouterProvider router={router} />;
}
