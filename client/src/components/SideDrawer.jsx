import React from 'react';

import MobileNavigation from './MobileNavigation';

const SideDrawer = props => {
	let drawerClass = 'side-drawer';

	if (props.showDrawer) {
		drawerClass = 'side-drawer open';
	}
	return (
		<div className={drawerClass}>
			<nav className="side-drawer__navigation">
				<MobileNavigation />
			</nav>
		</div>
	);
};

export default SideDrawer;
