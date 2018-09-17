import React from 'react';

import MainHeaderList from '../components/MainHeaderList';

const MainHeader = ({ isLoggedIn, logout }) => (
	<div className="home__app-header">
		<div style={{ fontSize: '2.5rem' }} className="icon">🍸🥤</div>
		<MainHeaderList logout={logout} isLoggedIn={isLoggedIn} />
	</div>
);

export default MainHeader;
