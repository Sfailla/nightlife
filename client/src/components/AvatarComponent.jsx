import React from 'react';
import { connect } from 'react-redux';
import { setAvatar } from '../actions/users';

import Auth from '../utils/AuthClass';

import guyAvatar from '../images/male-avatar.png';
import girlAvatar from '../images/female-avatar.png';
import defaultAvatar from '../images/default-avatar.jpg';
import SelectAvatar from '../components/SelectAvatar';
import Button from '../components/Button';

const styles = {
	button: {
		width: '15rem',
		height: '4rem',
		background: 'var(--primary-color)',
		color: 'white',
		letterSpacing: '2px',
		fontWeight: 'bold',
		margin: '2rem auto'
	}
};

export class AvatarComponent extends React.Component {
	state = {
		avatar: '',
		avatarSelect: ''
	};

	_isMounted = false;

	Auth = new Auth();

	handleOnChange = evt => {
		const { name, value } = evt.target;
		this.setState(() => ({ [name]: value }));
	};

	handleOnSubmit = event => {
		event.preventDefault();
		this.updateAvatar();
		this.props.dispatch(
			setAvatar(this.state.avatarSelect, this.handleSelectAvatar())
		);
		this.props.history.push('/dashboard');
	};

	initializeAvatar = () => {
		this.Auth
			.authFetch('/users/settings', { method: 'GET' })
			.then(res => res.json())
			.then(res => {
				console.log(res)
				const response = res;
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
				console.log('updated', res);
				const response = res;
				let avatar = response.settings.avatar;
				let avatarSelect = response.settings.avatarSelect;
				if (this._isMounted) {
					this.setState(() => ({ avatar, avatarSelect }));
				}
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

	componentDidMount = () => {
		this.initializeAvatar();
		this._isMounted = true;
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	render() {
		return (
			<form
				onSubmit={this.handleOnSubmit}
				className="account__avatar-wrapper"
			>
				<SelectAvatar
					avatar={this.state.avatar}
					avatarSelect={this.state.avatarSelect}
					handleSelectAvatar={this.handleSelectAvatar}
					handleOnChange={this.handleOnChange}
				/>
				<Button
					type="SUBMIT"
					name="Save Avatar"
					addStyles={styles.button}
				/>
			</form>
		);
	}
}

export default connect()(AvatarComponent);
