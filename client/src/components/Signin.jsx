import React from 'react';

import Typography from './Typography';
import { Icon } from './Icon';

import { BorderlessForm } from './Form';
import Button from './Button';

const styles = {
	title: {
		textAlign: 'center',
		color: 'var(--primary-color)',
		fontWeight: 'bold'
	},
	borderlessForm: {
		marginBottom: '2rem'
	},
	button: {
		width: '100%',
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
		bottom: '9rem',
		left: '50%',
		transform: 'translateX(-50%)',
		width: '39rem',
		textAlign: 'center'
	}
};

const Signin = ({ handleOnChange, errors }) => (
	<div className="signup">
		<div className="signup__signup-card">
			<Icon icon="puzzle" size={100} view1={26} view2={28} />
			<Typography addStyles={styles.title} headingSecondary="Login to NightLife" />
			{errors && <p style={styles.error}>** {errors} **</p>}
			<div style={{ paddingBottom: '7rem' }}>
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
