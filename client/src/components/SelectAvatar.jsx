import React from 'react';
import { connect } from 'react-redux';

import { setAvatar } from '../actions/users';
import Button from './Button';
import RadioGroup from './RadioGroup';

const styles = {
	button: {
		width: '15rem',
		background: 'var(--primary-color)',
		color: 'white',
		marginTop: '1.5rem',
		fontSize: '1.4rem',
		fontFamily: 'Roboto'
	}
};

const SelectAvatar = ({
	handleOnSubmit,
	handleOnChange,
	handleSelectAvatar,
	updateAvatar,
	avatarSelect,
	dispatch
}) => (
	<form onSubmit={handleOnSubmit} className="account__avatar-wrapper">
		<div className="account__avatar">
			<img
				className="app-header-list__avatar-img"
				src={handleSelectAvatar()}
				alt="avatar-profile"
			/>
			<Button
				type="submit"
				name="Save Avatar"
				onClick={() => {
					updateAvatar();
					dispatch(setAvatar(avatarSelect, handleSelectAvatar()));
				}}
				addStyles={styles.button}
			/>
		</div>
		<div className="account__checkboxes">
			<RadioGroup
				labelName="male-avatar"
				type="radio"
				id="male-avatar"
				handleChecked={avatarSelect === 'male-avatar'}
				handleOnChange={handleOnChange}
				name="avatarSelect"
			/>

			<RadioGroup
				labelName="female-avatar"
				type="radio"
				id="female-avatar"
				handleChecked={avatarSelect === 'female-avatar'}
				handleOnChange={handleOnChange}
				name="avatarSelect"
			/>

			<RadioGroup
				labelName="default-avatar"
				type="radio"
				id="default-avatar"
				handleChecked={avatarSelect === 'default-avatar'}
				handleOnChange={handleOnChange}
				name="avatarSelect"
			/>
		</div>
	</form>
);

export default connect()(SelectAvatar);
