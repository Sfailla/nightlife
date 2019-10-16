import React from 'react';
import authorize from '../utils/AuthClass';
import { withRouter } from 'react-router-dom';

import UserSettingsCard from '../components/UserSettingsCard';
import AccountTitle from '../components/AccountTitle';
import RemoveAccount from '../components/RemoveUser';

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

	removeUserAccount = () => {
		// this.props.logout();
		authorize
			.authFetch('/users/users-list', { method: 'DELETE' })
			.then(res => console.log('operation complete ', res))
			.catch(err => console.error(err));
	};

	componentDidMount = () => {
		this.initializeUserData();
	};

	render() {
		return (
			<div className="account">
				<AccountTitle />
				<UserSettingsCard
					company={this.state.company}
					email={this.state.email}
					location={this.state.description}
					description={this.state.description}
					handleOnChange={this.handleOnChange}
					handleOnSubmit={this.handleOnSubmit}
				/>
				<RemoveAccount removeAccount={this.removeUserAccount} />
			</div>
		);
	}
}

const AccountWithRouter = withRouter(Account);
export default AccountWithRouter;
