import React, { Component } from 'react';

import '../utils/tabs';

const styles = {
	heading: {
		textAlign: 'center',
		marginTop: '5rem'
	},
	card: {
		maxWidth: '70%',
		minHeight: '40rem',
		backgroundColor: 'white',
		padding: '2rem 5rem',
		margin: '0 auto',
		marginTop: '4rem',
		boxShadow: 'var(--box-shadow-md-l)'
	},
	title: {
		textAlign: 'center',
		marginTop: '2rem',
		marginBottom: '2rem',
		color: 'var(--primary-text-color)'
	}
};

class SignUp extends Component {
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

		if (form !== null || undefined) {
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

	handleOnClick = (evt) => {};

	render() {
		return (
			<div className="signup">
				<div className="heading-primary" style={styles.heading}>
					Sign up to see who is going out tonite!
				</div>

				<div className="signup__container">
					<ul className="signup__tabs">
						<li className="signup__tab">
							<a href="#test1">Test 1</a>
						</li>
						<li className="signup__tab">
							<a href="#test2">Test 2</a>
						</li>
						<li className="signup__indicator" />
					</ul>

					<div id="test1" className="signup__tab-content active-tab">
						Test 1
					</div>
					<div id="test2" className="signup__tab-content">
						Test 2
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;
