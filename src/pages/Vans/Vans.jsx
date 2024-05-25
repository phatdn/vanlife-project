import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export function loader() {
	return getVans();
}

export default function Vans() {
	const vans = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get('type');

	const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;

	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	}

	const vanElements = displayedVans.map((van) => (
		<div key={van.id} className="van-title">
			<Link
				to={van.id}
				state={{
					search: `?${searchParams.toString()}`,
					type: typeFilter,
				}}
			>
				<img src={van.imageUrl} alt="van-img" />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>
						${van.price} <span>/ day</span>
					</p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</Link>
		</div>
	));

	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<div className="van-list-filter-buttons">
				<button
					className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
					onClick={() => handleFilterChange('type', 'simple')}
				>
					Simple
				</button>
				<button
					className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
					onClick={() => handleFilterChange('type', 'luxury')}
				>
					Luxury
				</button>
				<button
					className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
					onClick={() => handleFilterChange('type', 'rugged')}
				>
					Rugged
				</button>
				{typeFilter ? (
					<button className="van-type clear-filters" onClick={() => handleFilterChange('type', null)}>
						Clear filters
					</button>
				) : null}
			</div>
			<div className="van-list">{vanElements}</div>
		</div>
	);
}
