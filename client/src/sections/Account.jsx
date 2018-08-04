import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAvatar } from '../actions/users';
import { BorderlessForm } from '../components/Form';
import RadioGroup from '../components/RadioGroup';

import guyAvatar from '../images/male-avatar.png';
import girlAvatar from '../images/female-avatar.png';
import defaultAvatar from '../images/default-avatar.jpg';
import Topography from '../components/Topography';

class Account extends Component {
	state = {
		email: null,
		location: null,
		description: null
	};

	handleOnChange = (evt) => {
		const { value } = evt.target;
		console.log('onchange ', this.handleSelectAvatar());
		this.props.dispatch(setAvatar(value, this.handleSelectAvatar()));
	};

	handleOnSubmit = (evt) => {
		evt.preventDefault();
	};

	handleSelectAvatar = () => {
		let avatar = defaultAvatar;

		switch (this.props.user.avatarSelect) {
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

	componentDidMount = () => {};

	render() {
		console.log('render ', this.handleSelectAvatar());
		return (
			<div className="account">
				<div style={{ display: 'flex' }}>
					<Topography classname="account__title" headingPrimary="Account" />
					<Topography classname="account__sub-title" headingSecondary="create a profile" />
				</div>
				<div className="account__profile-card">
					<div className="account__wrapper">
						<Topography clsname="account__card-title" headingTertiary="Profile" />
					</div>
					<hr />
					<div className="account__avatar-wrapper">
						<div className="account__avatar">
							<img src={this.handleSelectAvatar()} alt="no-avatar" />
						</div>
						<div className="account__checkboxes">
							<RadioGroup
								labelName="male-avatar"
								type="radio"
								id="male-avatar"
								handleChecked={this.props.user.avatarSelect === 'male-avatar'}
								handleOnChange={this.handleOnChange}
								name="avatarSelect"
							/>

							<RadioGroup
								labelName="female-avatar"
								type="radio"
								id="female-avatar"
								handleChecked={this.props.user.avatarSelect === 'female-avatar'}
								handleOnChange={this.handleOnChange}
								name="avatarSelect"
							/>

							<RadioGroup
								labelName="default-avatar"
								type="radio"
								id="default-avatar"
								handleChecked={this.props.user.avatarSelect === 'default-avatar'}
								handleOnChange={this.handleOnChange}
								name="avatarSelect"
							/>
						</div>
					</div>
					<hr />
					<div className="account__bio-info">
						<div className="account__form">
							<form onSubmit={this.handleOnSubmit}>
								<BorderlessForm
									type="text"
									name="avatar"
									label="Add-Avatar-url"
									handleOnChange={this.handleOnChange}
								/>

								<BorderlessForm
									type="email"
									name="email"
									label="Add-Email"
									handleOnChange={this.handleOnChange}
								/>

								<BorderlessForm
									type="text"
									name="location"
									label="Add-Location"
									handleOnChange={this.handleOnChange}
								/>

								<textarea
									className="u-mt-25"
									name="description"
									rows={5}
									placeholder="Add-Description"
									onChange={this.handleOnChange}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(Account);
