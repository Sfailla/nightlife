import React, { Fragment } from 'react';

const Avatar = ({ avatar, size }) => {
	const styles = {
		avatar: {
			width: `${size}`,
			height: `${size}`,
			borderRadius: '100%',
			border: '2px solid var(--link-color)'
		}
	};
	return (
		<Fragment>
			<img style={styles.avatar} src={avatar} alt="avatar-profile" />
		</Fragment>
	);
};

export default Avatar;
