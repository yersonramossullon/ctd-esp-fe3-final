import React from 'react';
import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

const Favs = () => {
	const { state, dentists, favorites } = useGlobalContext();
	const favoriteDentists = dentists.filter((dentist) => favorites.includes(dentist.id));

	return (
		<main className={`favoritos page-${state.theme}`}>
			<h1>Dentists Favs</h1>
			<div className="card-grid">
				{favoriteDentists.map((dentist) => (
					<Card key={dentist.id} dentist={dentist} />
				))}
			</div>
		</main>
	);
};

export default Favs;
