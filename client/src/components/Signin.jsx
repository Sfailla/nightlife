import React from 'react';

import Topography from '../components/Topography';
import { BorderlessForm } from '../components/Form';

const styles = {
	title: {
		textAlign: 'center',
		color: 'blue',
		fontWeight: 'bold'
	}
};

const Signin = (props) => (
	<div className="signup">
		<div className="signup__signup-container">
			<Topography addStyles={styles.title} headingSecondary="Sign In" />
			<BorderlessForm type="text" name="username" label="username" handleOnChange={props.handleOnChange} />
			<BorderlessForm
				type="password"
				name="password"
				label="password"
				inputButton={true}
				btnName="Submit"
				handleOnChange={props.handleOnChange}
			/>
		</div>
	</div>
);

export default Signin;
