import React from 'react';
import authorize from '../utils/AuthClass';

import Typography from '../components/Typography';
import AvatarComponent from '../components/AvatarComponent';
import AccountForm from '../components/AccountForm';

class Account extends React.Component {
	state = {
		company: '',
		email: '',
		location: '',
		description: ''
	};

	handleOnSubmit = event => {
		event.preventDefault();
		this.handleUpdateUserInfo();
		this.props.history.push('/dashboard');
	};

	handleOnChange = event => {
		const { name, value } = event.target;
		this.setState(() => ({ [name]: value }));
	};

	handleUpdateUserInfo = () => {
		const { company, email, location, description } = this.state;

		authorize
			.authFetch('/users/settings/biography', {
				method: 'PATCH',
				body: JSON.stringify({
					company,
					email,
					location,
					description
				})
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

	initializeUserData = () => {
		authorize
			.authFetch('/users/me', { method: 'GET' })
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
		this.initializeUserData();
	};

	render() {
		return (
			<div className="account">
				<div className="account__title-wrapper">
					<Typography
						headingPrimary="Account"
						classname="account__title"
					/>
					<Typography
						classname="account__sub-title"
						headingSecondary="create profile"
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
					<AccountForm
						company={this.state.company}
						email={this.state.email}
						location={this.state.location}
						description={this.state.description}
						handleOnChange={this.handleOnChange}
						handleOnSubmit={this.handleOnSubmit}
					/>
				</div>
			</div>
		);
	}
}

export default Account;
