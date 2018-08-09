import React from 'react';

import { BorderlessForm } from '../components/Form';
import CheckGroup from '../components/CheckGroup';

const styles = {
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'blue'
	}
};

const Signup = (props) => (
	<div className="signup">
		<div className="signup__signup-container">
			<div className="heading-secondary" style={styles.title}>
				Sign Up
			</div>
			<BorderlessForm type="text" name="username" label="username" handleOnChange={props.handleOnChange} />
			<BorderlessForm
				type={props.formType}
				name="password"
				label="password"
				inputButton={true}
				btnName="Submit"
				handleOnChange={props.handleOnChange}
			/>
			<CheckGroup
				name="checkbox"
				labelName="Show Password"
				checked={props.checked}
				handleCBChange={props.handleCBChange}
			/>
		</div>
	</div>
);

export default Signup;
