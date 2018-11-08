import React from 'react';
import Navigation from '../components/Navigation';

import MainHeaderList from '../components/MainHeaderList';

const MainHeader = ({ isLoggedIn, logout }) => (
	<div className="home__app-header">
		<Navigation />
		<div style={{ fontSize: '2.5rem' }} className="home__icon">
			{/* 🍸 */}
		</div>
		<MainHeaderList logout={logout} isLoggedIn={isLoggedIn} />
	</div>
);

export default MainHeader;
