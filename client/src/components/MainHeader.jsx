import React from 'react';

import MainHeaderList from '../components/MainHeaderList';

const MainHeader = ({ isLoggedIn, logout }) => (
	<div className="home__app-header">
		<div className="icon">ICON</div>
		<MainHeaderList logout={logout} isLoggedIn={isLoggedIn} />
	</div>
);

export default MainHeader;
