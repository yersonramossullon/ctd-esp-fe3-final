import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

const Home = () => {
	const { state, dentists } = useGlobalContext();

	return (
		<main className={`home page-${state.theme}`}>
			<h1>Nuestros Especialistas</h1>
			<div className="card-grid">
				{dentists.map((dentist) => (
					<Card key={dentist.id} dentist={dentist} />
				))}
				
			</div>
		</main>
	);
};

export default Home;