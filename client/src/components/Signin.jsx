import React from 'react';

import Typography from './Typography';
import { BorderlessForm } from './Form';
import Button from './Button';
import { Icon } from './Icon';

const styles = {
	title: {
		textAlign: 'center',
		color: 'var(--primary-color)',
		fontWeight: 'bold'
	},
	borderlessForm: {
		marginBottom: '3px'
	},
	button: {
		width: '18rem',
		height: '4rem',
		color: 'white',
		fontSize: '1.5rem',
		fontWeight: 'bold',
		margin: '0 auto',
		background: 'var(--primary-color)'
	},
	error: {
		color: 'red',
		position: 'absolute',
		top: '25%',
		left: '50%',
		transform: 'translateX(-50%)',
		width: '39rem',
		textAlign: 'center'
	}
};

const Signin = ({ handleOnChange, errors }) => (
	<div className="signup">
		<div className="signup__signup-container">
			<Icon icon="puzzle" size={50} view1={26} view2={28} />
			<Typography addStyles={styles.title} headingSecondary="Login" />
			{errors && <p style={styles.error}>** {errors} **</p>}
			<div style={{ marginBottom: '2rem' }}>
				<BorderlessForm
					addStyles={styles.borderlessForm}
					type="text"
					name="username"
					label="username"
					handleOnChange={handleOnChange}
				/>
				<BorderlessForm
					addStyles={styles.borderlessForm}
					type="password"
					name="password"
					label="password"
					btnName="Submit"
					handleOnChange={handleOnChange}
				/>
			</div>
			<Button addStyles={styles.button} type="submit" name="Submit" />
		</div>
	</div>
);

export default Signin;
