import React from 'react';
import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Card = ({ dentist }) => {
	const { state, favorites, toggleFavorite } = useGlobalContext();
	const isFavorite = favorites.includes(dentist.id);

	return (
		<div className={`card ${state.theme}`}>
			<button
				onClick={() => toggleFavorite(dentist.id)}
				className="favorite-btn"
				aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
				<span className="heart-icon">{isFavorite ? '❤️' : '🤍'}</span>
			</button>

			<Link to={`/dentista/${dentist.id}`} className="card-content">
				<div className="card-image-container">
					<img src="/images/doctor.jpg" alt={`Dr. ${dentist.name}`} className="card-image" />
				</div>
				<div className="card-body">
					<h3 className="card-name">{dentist.name}</h3>
					<p className="card-username">{dentist.username}</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
