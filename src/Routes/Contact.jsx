import React from 'react'
import Form from '../Components/Form'
import { useGlobalContext } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
	const { state } = useGlobalContext();

	return (
		<div className={`contact page-${state.theme}`}>
			<div className="contact-container">
				<div className={`contact-content ${state.theme}`}>
					<div className="contact-header">
						<h2>¿Necesitas más informacion?</h2>
						<p>envia tus preguntas y nos comunicamos contigo</p>
					</div>
					<div className="contact-form-wrapper">
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;