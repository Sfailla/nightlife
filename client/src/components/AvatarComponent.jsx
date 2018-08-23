import React, { Component } from 'react';
import Auth from '../utils/AuthClass';

import guyAvatar from '../images/male-avatar.png';
import girlAvatar from '../images/female-avatar.png';
import defaultAvatar from '../images/default-avatar.jpg';
import SelectAvatar from '../components/SelectAvatar';

export class AvatarComponent extends Component {
	state = {
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
	};

	initializeAvatar = () => {
		this.Auth
			.authFetch('/users/settings', { method: 'GET' })
			.then(res => res.json())
			.then(res => {
				const response = res[0];
				let avatar = response.settings.avatar;
				let avatarSelect = response.settings.avatarSelect;
				this.setState(() => ({ avatar, avatarSelect }));
			});
	};

	updateAvatar = () => {
		const avatarSelect = this.state.avatarSelect;
		const avatar = this.handleSelectAvatar();
		this.Auth
			.authFetch('/users/settings/avatar', {
				method: 'PATCH',
				body: JSON.stringify({ avatar, avatarSelect })
			})
			.then(res => res.json())
			.then(res => {
				const response = res;
				let avatar = response.settings.avatar;
				let avatarSelect = response.settings.avatarSelect;
				this.setState(() => ({ avatar, avatarSelect }));
			});
	};

	componentDidMount = () => {
		this.initializeAvatar();
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

	render() {
		return (
			<div>
				<SelectAvatar
					avatar={this.state.avatar}
					updateAvatar={this.updateAvatar}
					avatarSelect={this.state.avatarSelect}
					handleSelectAvatar={this.handleSelectAvatar}
					handleOnChange={this.handleOnChange}
					handleOnSubmit={this.handleOnSubmit}
				/>
			</div>
		);
	}
}

export default AvatarComponent;
