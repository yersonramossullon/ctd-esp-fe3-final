import React from 'react';
import { useGlobalContext } from '../Components/utils/global.context';

const Form = () => {
	const { state } = useGlobalContext();
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí iría la lógica de envío del formulario
		if (!formData.name || !formData.email || !formData.message) {
			alert('Por favor, complete todos los campos');
			return;
		}
		// Validando el email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			alert('Por favor, ingrese un email válido');
			return;
		}
	// No se que enviar, pero por mientras console log
		console.log('Datos del formulario:', formData);

		// Éxito
		alert('¡Formulario enviado con éxito!');

		// Limpiando
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className={`${state.theme}`}>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Nombre:</label>
					<input
						style={{ width: '18rem' }}
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label>Email:</label>
					<input
						style={{ width: '18rem' }}
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label>Mensaje:</label>
					<div>
						<textarea
							style={{ width: '18rem' }}
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="4"
							required
						/>
					</div>
				</div>

				<button style={{ width: '18.5rem' }} type="submit">
					Enviar
				</button>
			</form>
		</div>
	);
};

export default Form;
