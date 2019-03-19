import React, { Fragment } from 'react';

const Avatar = ({ avatar }) => {
	return (
		<Fragment>
			<img
				className="app-header-list__avatar-img"
				src={avatar}
				alt="avatar-profile"
			/>
		</Fragment>
	);
};

export default Avatar;
