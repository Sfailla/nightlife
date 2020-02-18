import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import authorize from '../utils/AuthClass';

import Typography from '../components/Typography';
import SignIn from '../components/Signin';
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

	handleOnSubmit = async event => {
		event.preventDefault();

		const { username, password } = this.state;
		const { login, setToken } = authorize;
		const sanitizeUser = username.toString().toLowerCase().trim();

		if (sanitizeUser.length && password.length) {
			this.setState(() => ({ errors: '' }));
			try {
				const response = await login(sanitizeUser, password);
				const res = await response.json();
				if (res.error) {
					this.setState(() => ({ errors: res.error }));
				} else if (!res.error) {
					setToken(res.tokens[0].token);
					this.setUserPresence(true);
					this.props.setUser(res);
					this.props.setUsername(res.username);
					this.props.setAvatar(res.settings.avatar);
					this.props.isLoggedIn(true);
					this.props.history.push('/dashboard');
				}
			} catch (errors) {
				this.setState({ errors });
				throw new Error(errors);
			}
		} else {
			this.setState(() => ({
				errors: 'Please fill out form completely'
			}));
		}
	};

	setUserPresence = async isLoggedIn => {
		try {
			return await authorize.authFetch('/users/presence', {
				method: 'PATCH',
				body: JSON.stringify({ isLoggedIn })
			});
		} catch (error) {
			console.error(error);
		}
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
