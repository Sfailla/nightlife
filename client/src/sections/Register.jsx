import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isLoggedIn, setUser, setUsername, setAvatar } from '../actions/users';
import Typography from '../components/Typography';
import Auth from '../utils/AuthClass';
import Signup from '../components/Signup';
import { Icon } from '../components/Icon';

const styles = {
	title: {
		textAlign: 'center',
		fontWeight: 'bold'
	},
	heading: {
		textAlign: 'center',
		paddingTop: '3rem'
	},
	card: {
		maxWidth: '50rem',
		height: 'auto',
		backgroundColor: 'white',
		margin: '0 auto',
		marginTop: '3rem',
		boxShadow: 'var(--box-shadow-md-l)',
		position: 'relative'
	}
};

class Register extends Component {
	state = {
		formType: 'password',
		checked: false,
		username: null,
		password: null,
		errors: null
	};

	Auth = new Auth();

	handleOnChange = evt => {
		const { name, value } = evt.target;
		this.setState(() => ({ [name]: value, errors: '' }));
	};

	handleCBChange = () => {
		let form = document.querySelector('#password');

		if (form !== null || form !== undefined) {
			this.setState(() => ({
				formType: this.state.formType === 'password' ? 'text' : 'password',
				checked: this.state.checked === false ? true : false
			}));
		}
	};

	handleOnSubmit = evt => {
		evt.preventDefault();

		const { register, setToken } = this.Auth;
		const { username, password } = this.state;

		if (username !== null && password !== null) {
			if (username.length > 3) {
				this.setState(() => ({ errors: '' }));
				return register(username, password)
					.then(res => res.json())
					.then(res => {
						if (res.error) {
							this.setState(() => ({ errors: res.error }));
						} else {
							setToken(res.tokens[0].token);
							this.props.setUser(res);
							this.props.setUsername(this.state.username);
							this.props.isLoggedIn(true);
							// this.props.setAvatar(
							// 	res.settings.avatarSelect,
							// 	res.settings.avatar
							// );
							this.props.history.push('/dashboard');
						}
					})
					.catch(err => {
						if (err) {
							this.setState(() => ({
								errors: 'there is an registration error'
							}));
							return;
						}
					});
			} else {
				this.setState(() => ({
					errors: 'username must be more than 3 letters'
				}));
			}
		} else {
			this.setState(() => ({
				errors: 'Please fill out form completely'
			}));
		}
	};

	componentDidMount = () => {};

	render() {
		return (
			<div className="signup">
				<Typography
					addStyles={styles.heading}
					headingPrimary="Sign up to see who is going out tonite!"
				/>
				<div className="signup__sub-heading" style={styles.heading}>
					<Icon
						addStyles={{ fill: 'var(--primary-color)' }}
						size={100}
						view1={16}
						view2={28}
						icon="code-branch"
					/>
					<Typography headingSecondary="Sign Up" addStyles={styles.title} />
				</div>
				<div style={styles.card}>
					<div className="signup__container">
						<form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
							<Signup
								errors={this.state.errors}
								formType={this.state.formType}
								checked={this.state.checked}
								handleCBChange={this.handleCBChange}
								handleOnChange={this.handleOnChange}
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const RegisterWithRouter = withRouter(
	connect(null, { setUser, setUsername, isLoggedIn, setAvatar })(Register)
);

export default RegisterWithRouter;
