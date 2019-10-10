import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import authorize from '../utils/AuthClass';

import Typography from './Typography';
import SignIn from './Signin';
import {
	isLoggedIn,
	setUsername,
	setUser,
	setAvatar
} from '../actions/users';

export class Login extends Component {
	state = {
		username: '',
		password: '',
		errors: ''
	};

	handleOnChange = event => {
		const { name, value } = event.target;
		this.setState(() => ({ [name]: value, errors: '' }));
	};

	handleOnSubmit = event => {
		event.preventDefault();

		const { username, password } = this.state;
		const { login, setToken } = authorize;

		const trimmedUsername = username.trim();

		if (trimmedUsername.length && password.length) {
			this.setState(() => ({ errors: '' }));
			return login(trimmedUsername, password)
				.then(res => res.json())
				.then(res => {
					if (res.error) {
						this.setState(() => ({ errors: res.error }));
					} else {
						setToken(res.tokens[0].token);
						this.setUserPresence(true);
						this.props.setUser(res);
						this.props.setUsername(res.username);
						this.props.setAvatar(res.settings.avatar);
						this.props.isLoggedIn(true);
						this.props.history.push('/dashboard');
					}
				})
				.catch(err => {
					if (err) {
						return;
					}
				});
		} else {
			this.setState(() => ({
				errors: 'Please fill out form completely'
			}));
		}
	};

	setUserPresence = isLoggedIn => {
		authorize
			.authFetch('/users/presence', {
				method: 'PATCH',
				body: JSON.stringify({ isLoggedIn })
			})
			.then(doc => doc.json())
			.then(doc => {})
			.catch(err => console.error(err));
	};

	render() {
		return (
			<div className="signup">
				<div className="signup__title">
					<Typography
						className="signup__heading"
						headingPrimary="sign in for access to nightlife features"
					/>
				</div>
				<div className="signup__card">
					<div className="signup__container">
						<form
							style={{ height: '100%' }}
							onSubmit={this.handleOnSubmit}
						>
							<SignIn
								errors={this.state.errors}
								handleOnChange={this.handleOnChange}
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const LoginWithRouter = withRouter(
	connect(null, { setUser, setUsername, isLoggedIn, setAvatar })(
		Login
	)
);

export default LoginWithRouter;
