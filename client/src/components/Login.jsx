import React, { Component } from 'react';

import Signin from './Signin';

const styles = {
	heading: {
		textAlign: 'center',
		marginTop: '5rem'
	},
	card: {
		maxWidth: '70%',
		minHeight: '50rem',
		backgroundColor: 'white',
		margin: '0 auto',
		marginTop: '4rem',
		marginBottom: '4rem',
		boxShadow: 'var(--box-shadow-md-l)'
	}
};

export class Login extends Component {
	state = {
		username: '',
		password: '',
		errors: ''
	};
	handleOnChange = (evt) => {
		const { name, value } = evt.target;
		this.setState(() => ({ [name]: value }));
	};

	handleOnSubmit = (evt) => {
		evt.preventDefault();
	};

	render() {
		return (
			<div className="signup">
				<div className="heading-primary" style={styles.heading}>
					Sign In below!
				</div>
				<div style={styles.card}>
					<div className="signup__container">
						<Signin
							formType={this.state.formType}
							handleOnChange={this.handleOnChange}
							handleOnSubmit={this.handleOnSubmit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
