import React from 'react';

import MobileNavigation from './MobileNavigation';
import DrawerLoginDisplay from './DrawerLoginDisplay';

const SideDrawer = props => {
	let drawerClass = 'side-drawer';

	if (props.showDrawer) {
		drawerClass = 'side-drawer open';
	}
	return (
		<div className={drawerClass}>
			<div
				className={
					props.isLoggedIn ? (
						'side-drawer__avatar-section'
					) : (
						'side-drawer__avatar'
					)
				}
			>
				{props.isLoggedIn ? (
					<DrawerLoginDisplay
						avatar={props.avatar}
						username={props.username}
						logout={props.logout}
					/>
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
