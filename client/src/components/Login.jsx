import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from '../utils/AuthClass';

import Typography from './Typography';
import Signin from './Signin';
import { isLoggedIn, getUsername, setAvatar } from '../actions/users';

const styles = {
	heading: {
		textAlign: 'center',
		paddingTop: '3rem'
	},
	card: {
		maxWidth: '50rem',
		height: '50rem',
		backgroundColor: 'white',
		margin: '0 auto',
		marginTop: '4rem',
		marginBottom: '4rem',
		boxShadow: 'var(--box-shadow-md-l)',
		position: 'relative'
	}
};

export class Login extends Component {
	state = {
		username: '',
		password: '',
		errors: ''
	};

	Auth = new Auth();

	handleOnChange = event => {
		const { name, value } = event.target;
		this.setState(() => ({ [name]: value, errors: '' }));
	};

	handleOnSubmit = event => {
		event.preventDefault();

		const { username, password } = this.state;
		const { login, setToken } = this.Auth;

		if (username.length && password.length) {
			this.setState(() => ({ errors: '' }));
			return login(username, password)
				.then(res => res.json())
				.then(res => {
					if (res.error) {
						this.setState(() => ({ errors: res.error }));
					} else {
						setToken(res.tokens[0].token);
						this.props.dispatch(getUsername(res.username));
						this.props.dispatch(isLoggedIn(true));
						this.props.dispatch(
							setAvatar(res.settings.avatarSelect, res.settings.avatar)
						);
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
	render() {
		return (
			<div className="signup">
				<Typography
					addStyles={styles.heading}
					headingPrimary="sign in for access to nightlife features"
				/>
				<div style={styles.card}>
					<div className="signup__container">
						<form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
							<Signin
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

export default withRouter(connect()(Login));
