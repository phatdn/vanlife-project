import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<Link to="/" className="site-logo">
				#VanLife
			</Link>
			<nav>
				<Link to="about">About</Link>
			</nav>
		</header>
	);
}
