import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
export default function App() {
	return <RouterProvider router={router} />;
}
