import React from 'react';

import AppHeaderNav from './AppHeaderNav';

const AppHeader = ({ handleSelectAvatar }) => (
	<div className="home__app-header">
		<div className="icon">ICON</div>
		<AppHeaderNav handleSelectAvatar={handleSelectAvatar} />
	</div>
);

export default AppHeader;
