import React from 'react';

import { Icon } from './Icon';
import Typography from './Typography';

import { BorderlessForm } from './Form';
import CheckGroup from './CheckGroup';
import Button from './Button';

const styles = {
	button: {
		order: '2',
		width: '100%',
		height: '4rem',
		color: 'white',
		fontSize: '1.5rem',
		fontWeight: 'bold',
		margin: '0 auto',
		marginTop: '5rem',
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
		<div className="signup__signup-card">
			<Icon
				addStyles={{ fill: 'var(--primary-color)' }}
				size={100}
				view1={16}
				view2={28}
				icon="code-branch"
			/>
			<Typography
				className="u-center-text"
				headingSecondary="Sign Up For NightLife"
				addStyles={styles.title}
			/>
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
