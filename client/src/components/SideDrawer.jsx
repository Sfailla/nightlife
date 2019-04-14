import React from 'react';

import MobileNavigation from './MobileNavigation';

const SideDrawer = props => {
	let drawerClass = 'side-drawer';

	if (props.showDrawer) {
		drawerClass = 'side-drawer open';
	}
	return (
		<div className={drawerClass}>
			<div className="side-drawer__avatar">avatar</div>
			<div className="side-drawer__nav">
				<MobileNavigation />
			</div>
		</div>
	);
};

export default SideDrawer;
