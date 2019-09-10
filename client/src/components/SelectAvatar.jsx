import React, { Fragment } from 'react';

import RadioGroup from './RadioGroup';

const SelectAvatar = ({
	handleOnChange,
	handleSelectAvatar,
	avatarSelect
}) => (
	<Fragment>
		<div className="account__avatar">
			<img
				className="app-header-list__avatar-img"
				src={handleSelectAvatar()}
				alt="avatar-profile"
			/>
		</div>
		<div className="account__checkboxes">
			<RadioGroup
				labelName="male"
				type="radio"
				id="male-avatar"
				handleChecked={avatarSelect === 'male-avatar'}
				handleOnChange={handleOnChange}
				name="avatarSelect"
			/>

			<RadioGroup
				labelName="female"
				type="radio"
				id="female-avatar"
				handleChecked={avatarSelect === 'female-avatar'}
				handleOnChange={handleOnChange}
				name="avatarSelect"
			/>

			<RadioGroup
				labelName="default"
				type="radio"
				id="default-avatar"
				handleChecked={avatarSelect === 'default-avatar'}
				handleOnChange={handleOnChange}
				name="avatarSelect"
			/>
		</div>
	</Fragment>
);

export default SelectAvatar;
