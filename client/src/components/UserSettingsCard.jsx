import React from 'react';

import AvatarComponent from '../components/AvatarComponent';
import AccountForm from '../components/AccountForm';
import Typography from './Typography';

const UserSettingsCard = props => {
	return (
		<div className="account__profile-card">
			<Typography
				className="account__card-title"
				headingTertiary="Change Avatar"
			/>
			<hr />
			<AvatarComponent />
			<hr />
			<Typography
				className="account__card-title"
				headingTertiary="Add User Info"
			/>
			<hr />
			<AccountForm
				company={props.company}
				email={props.email}
				location={props.location}
				description={props.description}
				handleOnChange={props.handleOnChange}
				handleOnSubmit={props.handleOnSubmit}
			/>
		</div>
	);
};

export default UserSettingsCard;
