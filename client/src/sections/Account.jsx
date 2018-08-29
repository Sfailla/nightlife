import React from 'react';
import { connect } from 'react-redux';
import Auth from '../utils/AuthClass';

import Typography from '../components/Typography';
import AvatarComponent from '../components/AvatarComponent';
import AccountBioForm from '../components/AccountBioForm';
import Button from '../components/Button';

const styles = {
	button: {
		width: '15rem',
		height: '4rem',
		background: 'var(--primary-color)',
		color: 'white',
		fontWeight: 'bold',
		margin: '2rem auto'
	}
};

class Account extends React.Component {
	state = {
		company: '',
		email: '',
		location: '',
		Biography: ''
	};

	Auth = new Auth();

	handleOnSubmit = event => {
		event.preventDefault();
	};

	handleOnChange = event => {
		const { name, value } = event.target;
		this.setState(() => ({ [name]: value }));
	};

	handleUpdateUserInfo = () => {
		const { company, email, location, description } = this.state;

		this.Auth
			.authFetch('/users/settings/biography', {
				method: 'PATCH',
				body: JSON.stringify({ company, email, location, description })
			})
			.then(res => res.json())
			.then(res => {
				this.setState(() => ({
					company: res.settings.company,
					email: res.email,
					location: res.settings.location,
					description: res.settings.description
				}));
			});
	};

	componentDidMount = () => {
		this.Auth
			.authFetch('/users/me', { method: 'GET' })
			.then(res => res.json())
			.then(res => {
				console.log(res);
				this.setState(() => ({
					company: res.settings.company,
					email: res.email,
					location: res.settings.location,
					description: res.settings.description
				}));
			});
	};

	render() {
		return (
			<div className="account">
				<div style={{ display: 'flex' }}>
					<Typography
						classname="account__title"
						headingPrimary="Account"
					/>
					<Typography
						classname="account__sub-title"
						headingSecondary="create a profile"
					/>
				</div>
				<div className="account__profile-card">
					<Typography
						classname="account__card-title"
						headingTertiary="Change Avatar"
					/>
					<hr />
					<AvatarComponent />
					<hr />
					<Typography
						classname="account__card-title"
						headingTertiary="Add User Info"
					/>
					<hr />
					<AccountBioForm
						handleOnChange={this.handleOnChange}
						handleOnSubmit={this.handleOnSubmit}
						company={this.state.company}
						email={this.state.email}
						location={this.state.location}
						description={this.state.description}
					/>

					<Button
						addStyles={styles.button}
						type="button"
						name="Save Bio"
						onClick={this.handleUpdateUserInfo}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(Account);
