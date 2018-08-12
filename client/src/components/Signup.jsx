import React from 'react';

import { BorderlessForm } from '../components/Form';
import CheckGroup from '../components/CheckGroup';
import Button from '../components/Button';

const styles = {
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'blue'
	},
	button: {
		order: '2',
		width: '18rem',
		height: '4rem',
		color: 'white',
		fontSize: '1.5rem',
		fontWeight: 'bold',
		margin: '0 auto',
		background: 'var(--primary-color)'
	}
};

const Signup = (props) => (
	<div className="signup">
		<div className="signup__signup-container">
			<div className="heading-secondary" style={styles.title}>
				Sign Up
			</div>
			<div>
				<BorderlessForm type="text" name="username" label="username" handleOnChange={props.handleOnChange} />
				<BorderlessForm
					type={props.formType}
					name="password"
					label="password"
					handleOnChange={props.handleOnChange}
				/>
			</div>
			<CheckGroup
				name="checkbox"
				labelName="Show Password"
				checked={props.checked}
				handleCBChange={props.handleCBChange}
			/>
			<Button addStyles={styles.button} type="submit" name="submit" />
		</div>
	</div>
);

export default Signup;
