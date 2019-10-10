import React from 'react';
import Avatar from './Avatar';
import Typography from './Typography';
import LogoutButton from './LogoutButton';

const DrawerLoginDisplay = ({ avatar, username, logout }) => {
	const styles = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};
	return (
		<ul style={styles}>
			<li>
				<Avatar avatar={avatar} size={8} />
			</li>
			<li>
				<Typography
					addStyles={{ color: 'white' }}
					headingTertiary={username}
				/>
			</li>
			<li>
				<LogoutButton
					logout={logout}
					addStyles={{ width: '12rem' }}
					name="logout"
				/>
			</li>
		</ul>
	);
};

export default DrawerLoginDisplay;
