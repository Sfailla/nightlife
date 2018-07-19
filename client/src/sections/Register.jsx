import React, { Component } from 'react';

import Signup from '../components/Signup';

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

class Register extends Component {
	state = {
		formType: 'password',
		username: null,
		password: null,
		errors: null,
		checked: false
	};

	handleOnChange = (evt) => {
		const { name, value } = evt.target;

		this.setState(() => ({ [name]: value }));
	};

	handleCBChange = (evt) => {
		let form = document.querySelector('#password');

		if (form !== null || form !== undefined) {
			this.setState(() => ({
				formType: this.state.formType === 'password' ? 'input' : 'password',
				checked: this.state.checked === false ? true : false
			}));
		}
	};

	handleOnSubmit = (evt) => {
		evt.persist();
		evt.preventDefault();
	};

	render() {
		return (
			<div className="signup">
				<div className="heading-primary" style={styles.heading}>
					Sign up to see who is going out tonite!
				</div>
				<div style={styles.card}>
					<div className="signup__container">
						<Signup
							formType={this.state.formType}
							checked={this.state.checked}
							handleCBChange={this.handleCBChange}
							handleOnChange={this.handleOnChange}
							handleOnSubmit={this.handleOnSubmit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
