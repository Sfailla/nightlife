import React from 'react';

import { BorderlessForm } from '../components/Form';

const styles = {
	title: {
		textAlign: 'center',
		marginTop: '2rem',
		marginBottom: '2rem',
		color: 'var(--primary-text-color)',
		fontWeight: 'bold'
	}
};

const Signin = (props) => (
	<div className="signup">
		<div className="signup__signup-container">
			<div className="heading-secondary" style={styles.title}>
				Sign In
			</div>

			<BorderlessForm
				type="text"
				name="username"
				label="username"
				handleOnChange={props.handleOnChange}
				handleOnSubmit={props.handleOnSubmit}
			/>
			<BorderlessForm
				type="password"
				name="password"
				label="password"
				inputButton={true}
				btnName="Submit"
				handleOnChange={props.handleOnChange}
				handleOnSubmit={props.handleOnSubmit}
			/>
		</div>
	</div>
);

export default Signin;
