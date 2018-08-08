import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from '../utils/AuthComponent';

import Signin from './Signin';
import { isLoggedIn, getUsername } from '../actions/users';

const styles = {
	heading: {
		textAlign: 'center',
		marginTop: '5rem',
		color: 'var(--primary-text-color)'
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
		username: null,
		password: null,
		errors: null
	};

	Auth = new Auth();

	handleOnChange = (evt) => {
		const { name, value } = evt.target;
		this.setState(() => ({ [name]: value }));
	};

	handleOnSubmit = (evt) => {
		evt.preventDefault();

		const { username, password } = this.state;
		const { login, setToken } = this.Auth;

		return login(username, password).then((res) => res.json()).then((res) => {
			console.log(res.tokens);
			const token = res.tokens[0].token;
			setToken(token);
			this.props.dispatch(getUsername(res.username));
			this.props.dispatch(isLoggedIn(true));
			this.props.history.push('/dashboard');
		});
	};

	render() {
		return (
			<div className="signup">
				<div className="heading-primary" style={styles.heading}>
					Sign In below!
				</div>
				<div style={styles.card}>
					<div className="signup__container">
						<form onSubmit={this.handleOnSubmit}>
							<Signin handleOnChange={this.handleOnChange} />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(connect()(Login));
