import { createContext, useMemo, useReducer, useContext, useEffect } from 'react';

export const initialState = {
	theme: 'light',
	data: [],
	dentists: [],
	favorites: [],
};

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			const newTheme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return { ...state, theme: newTheme };
			

		case 'SET_DENTISTS':
			return {
				...state,
				dentists: action.payload,
			};

		case 'TOGGLE_FAVORITE':
			const updatedFavorites = state.favorites.includes(action.payload)
				? state.favorites.filter((id) => id !== action.payload)
				: [...state.favorites, action.payload];
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
			return {
				...state,
				favorites: updatedFavorites,
			};

		default:
			return state;
	}
};

export const ContextProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, {
		...initialState,
		theme: localStorage.getItem('theme') || 'light',
		favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
	});
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => dispatch({ type: 'SET_DENTISTS', payload: data }));
	}, []);

	const contextValue = useMemo(() => {
		return {
			state,
			toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
			setData: (data) => dispatch({ type: 'SET_DATA', payload: data }),
			dentists: state.dentists,
			favorites: state.favorites,
			toggleFavorite: (id) => dispatch({ type: 'TOGGLE_FAVORITE', payload: id }),
		};
	}, [state]);


	return <ContextGlobal.Provider value={contextValue}>{children}</ContextGlobal.Provider>;
};


export const useGlobalContext = () => {
	const context = useContext(ContextGlobal);
	if (context === undefined) {
		throw new Error('useGlobalContext must be used within a ContextProvider');
	}
	return context;

};