import React from 'react';

import MobileNavigation from './MobileNavigation';
import Avatar from './Avatar';
import Typography from './Typography';
import LogoutButton from './LogoutButton';

const SideDrawer = props => {
	let drawerClass = 'side-drawer';

	if (props.showDrawer) {
		drawerClass = 'side-drawer open';
	}
	return (
		<div className={drawerClass}>
			<div className="side-drawer__avatar-section">
				{props.isLoggedIn ? (
					<ul>
						<li>
							<Avatar avatar={props.avatar} size={'8rem'} />
						</li>
						<li>
							<Typography
								addStyles={{ color: 'white' }}
								headingTertiary={props.username}
							/>
						</li>
						<li>
							<LogoutButton
								logout={props.logout}
								addStyles={{ width: '12rem' }}
								name="logout"
							/>
						</li>
					</ul>
				) : (
					<div className="side-drawer__avatar-section--no-auth">
						<p>NIGHTLIFE</p>
					</div>
				)}
			</div>
			<div className="side-drawer__nav-section">
				<MobileNavigation closeDrawer={props.handleCloseDrawer} />
			</div>
		</div>
	);
};

export default SideDrawer;
