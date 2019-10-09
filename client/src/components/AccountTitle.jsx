import React from 'react';
import Typography from './Typography';

const AccountTitle = () => {
	return (
		<div className="account__title-wrapper">
			<Typography
				headingPrimary="Account"
				className="account__title"
			/>
			<Typography
				className="account__sub-title"
				headingSecondary="create profile"
			/>
		</div>
	);
};

export default AccountTitle;
