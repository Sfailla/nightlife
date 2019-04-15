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
			<div className="side-drawer__avatar">
				<div className="side-drawer__profile-wrapper">
					<ul>
						<li>
							<Avatar avatar={props.avatar} size={'8rem'} />
						</li>
						<li>
							<Typography headingTertiary={props.username} />
						</li>
						<li>
							<LogoutButton
								logout={props.logout}
								addStyles={{ width: '10rem' }}
								name="logout"
							/>
						</li>
					</ul>
				</div>
			</div>
			<div className="side-drawer__nav">
				<MobileNavigation />
			</div>
		</div>
	);
};

export default SideDrawer;
