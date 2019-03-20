import React from 'react';

import { BorderlessForm } from './Form';
import CheckGroup from './CheckGroup';
import Button from './Button';
import Typography from './Typography';
import { Icon } from './Icon';

const styles = {
	title: {
		textAlign: 'center',
		fontWeight: 'bold'
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
	},
	form: {
		marginBottom: '1rem'
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

const Signup = props => (
	<div className="signup">
		<div className="signup__signup-container">
			<Icon size={50} view1={16} view2={28} icon="code-branch" />
			<Typography headingSecondary="Sign Up" addStyles={styles.title} />
			{props.errors && <p style={styles.error}>** {props.errors} **</p>}
			<div>
				<BorderlessForm
					type="text"
					name="username"
					label="username"
					handleOnChange={props.handleOnChange}
				/>
				<BorderlessForm
					addStyles={styles.form}
					type={props.formType}
					name="password"
					label="password"
					handleOnChange={props.handleOnChange}
				/>
				<CheckGroup
					name="checkbox"
					labelName="Show Password"
					checked={props.checked}
					handleCBChange={props.handleCBChange}
				/>
			</div>
			<Button addStyles={styles.button} type="submit" name="submit" />
		</div>
	</div>
);

export default Signup;
