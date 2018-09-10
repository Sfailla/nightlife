import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isLoggedIn, getUsername, setAvatar } from '../actions/users';
import Topography from '../components/Typography';
import Auth from '../utils/AuthClass';
import Signup from '../components/Signup';

const styles = {
	heading: {
		textAlign: 'center',
		marginTop: '5rem',
		color: 'var(--primary-color)'
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
		checked: false,
		username: null,
		password: null,
		errors: null
	};

	Auth = new Auth();

	handleOnChange = evt => {
		const { name, value } = evt.target;
		this.setState(() => ({ [name]: value }));
	};

	handleCBChange = () => {
		let form = document.querySelector('#password');

		if (form !== null || form !== undefined) {
			this.setState(() => ({
				formType:
					this.state.formType === 'password' ? 'text' : 'password',
				checked: this.state.checked === false ? true : false
			}));
		}
	};

	handleOnSubmit = evt => {
		evt.preventDefault();

		const { register, setToken } = this.Auth;
		const { username, password } = this.state;

		return register(username, password)
			.then(res => res.json())
			.then(res => {
				const token = res.tokens[0].token;
				setToken(token);
				this.props.dispatch(getUsername(res.username));
				this.props.dispatch(isLoggedIn(true));
				this.props.dispatch(
					setAvatar(res.settings.avatarSelect, res.settings.avatar)
				);
				this.props.history.push('/dashboard');
			});
	};

	componentDidMount = () => {};

	render() {
		return (
			<div className="signup">
				<Topography
					addStyles={styles.heading}
					headingPrimary="Sign up to see who is going out tonite!"
				/>
				<div style={styles.card}>
					<div className="signup__container">
						<form onSubmit={this.handleOnSubmit}>
							<Signup
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

export default withRouter(connect()(Register));
