import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
	const { state, toggleTheme } = useGlobalContext();
	return (
		<nav className={state.theme}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/contacto">Contacto</Link>
				</li>
				<li>
					<Link to="/favs">Favoritos</Link>
				</li>
			</ul>

			<div className="themeToggle">
				<button onClick={toggleTheme}>{state.theme === 'light' ? '☀️' : '🌙'}</button>
			</div>
		</nav>
	);
};

export default Navbar;