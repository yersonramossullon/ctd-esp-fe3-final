import { useGlobalContext } from '../Components/utils/global.context';
const Footer = () => {
  const { state, toggleTheme } = useGlobalContext();
  return (
		<footer className={state.theme}>
			<p>Powered by</p>
      		<p>Yerson Ramos Sullon DH</p>
			<img src="/images/DH.png" alt="DH-logo" />
		</footer>
	);
}

export default Footer
