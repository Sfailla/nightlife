import React, { Fragment } from 'react';

const Avatar = props => {
	return (
		<Fragment>
			<img
				className="app-header-list__avatar-img"
				src={props.avatar}
				alt="avatar-profile"
			/>
		</Fragment>
	);
};

export default Avatar;
