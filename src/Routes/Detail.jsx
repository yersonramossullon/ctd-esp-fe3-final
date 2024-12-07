import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';

const Detail = () => {
	const { id } = useParams();
	const { state, favorites, toggleFavorite } = useGlobalContext();
	const [dentist, setDentist] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDentist = async () => {
			try {
				const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
				if (!response.ok) {
					throw new Error('No se obtuvo la información del dentista');
				}
				const data = await response.json();
				setDentist(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};


		fetchDentist();
	}, [id]);

	if (loading) return <div className={`page-${state.theme} detail-loading`}>Cargando...</div>;
	if (error) return <div className={`page-${state.theme} detail-error`}>Error: {error}</div>;
	if (!dentist) return <div className={`page-${state.theme} detail-not-found`}>No se encontró el dentista</div>;

	return (
		<div className={`detail page-${state.theme}`}>
			<div className="detail-container">
				<div className="detail-card">
					<div className="detail-header">
						<img src="/images/doctor.jpg" alt={`Dr. ${dentist.name}`} className="detail-image" />
						<h1>Dr. {dentist.name}</h1>
						<button onClick={() => toggleFavorite(parseInt(id))} className="detail-favorite-btn">
							{favorites.includes(parseInt(id)) ? '❤️' : '🤍'}
						</button>
					</div>

					<div className="detail-info">
						<div className="info-item">
							<span className="info-label">Email</span>
							<a href={`mailto:${dentist.email}`} className="info-value">
								{dentist.email}
							</a>
						</div>

						<div className="info-item">
							<span className="info-label">Teléfono</span>
							<a href={`tel:${dentist.phone}`} className="info-value">
								{dentist.phone}
							</a>
						</div>

						<div className="info-item">
							<span className="info-label">Website</span>
							<a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer" className="info-value">
								{dentist.website}
							</a>
						</div>

						<div className="info-item">
							<span className="info-label">Dirección</span>
							<span className="info-value">
								{dentist.address?.street}, {dentist.address?.suite}
								<br />
								{dentist.address?.city}, {dentist.address?.zipcode}
							</span>
						</div>

						<div className="info-item">
							<span className="info-label">Compañía</span>
							<span className="info-value">
								{dentist.company?.name}
								<br />
								<small>{dentist.company?.catchPhrase}</small>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};



export default Detail;