import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from '../utils/AuthComponent';

import { setAvatar } from '../actions/users';
import guyAvatar from '../images/male-avatar.png';
import girlAvatar from '../images/female-avatar.png';
import defaultAvatar from '../images/default-avatar.jpg';
import Topography from '../components/Topography';
import SelectAvatar from '../components/SelectAvatar';
import AccountBioForm from '../components/AccountBioForm';

class Account extends Component {
	state = {
		email: null,
		location: null,
		description: null,
		avatar: '',
		avatarSelect: ''
	};

	Auth = new Auth();

	handleOnChange = evt => {
		const { name, value } = evt.target;
		this.setState(() => ({ [name]: value }));
	};

	handleOnSubmit = evt => {
		evt.preventDefault();

		const { avatar, avatarSelect } = this.state;
		this.Auth
			.authFetch('/settings/avatar', {
				method: 'PATCH',
				body: JSON.stringify({ avatar, avatarSelect })
			})
			.then(user => user.json())
			.then(user => {
				console.log(user);
			});
	};

	handleSelectAvatar = () => {
		let avatar = defaultAvatar;

		switch (this.state.avatarSelect) {
			case 'male-avatar':
				avatar = guyAvatar;
				break;
			case 'female-avatar':
				avatar = girlAvatar;
				break;
			case 'default-avatar':
				avatar = defaultAvatar;
				break;
			default:
				return avatar;
		}
		return avatar;
	};

	initializeAvatar = () => {
		this.Auth
			.authFetch('/settings/avatar', { method: 'POST' })
			.then(results => results.json())
			.then(results => {
				let avatar = results[0].avatar;
				let avatarSelect = results[0].avatarSelect;
				console.log(avatar);
				this.setState(() => ({ avatar, avatarSelect }));
			});
	};

	updateAvatar = async () => {
		await this.Auth
			.authFetch('/settings/avatar', { method: 'GET' })
			.then(user => user.json())
			.then(user => {
				let avatar = user[0].avatar;
				let avatarSelect = user[0].avatarSelect;
				this.setState(() => ({ avatar, avatarSelect }));
			});
	};

	componentDidUpdate = (prevProps, prevState) => {
		// console.log(prevState.avatarSelect);
		// console.log(this.state.avatarSelect);
	};

	componentDidMount = async () => {
		await this.updateAvatar();
		await console.log(this.state.avatarSelect);
		// typeof this.state.avatar === null
		// 	? console.log('first render')
		// 	: console.log('already rendered');
	};

	render() {
		return (
			<div className="account">
				<div style={{ display: 'flex' }}>
					<Topography
						classname="account__title"
						headingPrimary="Account"
					/>
					<Topography
						classname="account__sub-title"
						headingSecondary="create a profile"
					/>
				</div>
				<div className="account__profile-card">
					<Topography
						classname="account__card-title"
						headingTertiary="Change Avatar"
					/>
					<hr />
					<SelectAvatar
						avatarSelect={this.state.avatarSelect}
						handleSelectAvatar={this.handleSelectAvatar}
						handleOnChange={this.handleOnChange}
						handleOnSubmit={this.handleOnSubmit}
					/>
					<hr />
					<Topography
						classname="account__card-title"
						headingTertiary="Add Biography"
					/>
					<hr />
					<AccountBioForm
						handleOnChange={this.handleOnChange}
						handleOnSubmit={this.handleOnSubmit}
					/>
					<hr style={{ marginTop: '1rem' }} />
					<Topography
						classname="account__card-title"
						headingTertiary="change username and/or password"
					/>
					<hr />
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
