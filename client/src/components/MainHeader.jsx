import React from 'react';
import Navigation from '../components/Navigation';

import MainHeaderList from '../components/MainHeaderList';

const MainHeader = ({ isLoggedIn, logout, openDrawer, isOpen }) => (
	<div className="home__app-header">
		<div className="home__navigation">
			<Navigation />
		</div>
		<div style={{ fontSize: '2.5rem' }} className="home__icon">
			{/* 🍸 */}
		</div>
		<MainHeaderList
			logout={logout}
			isLoggedIn={isLoggedIn}
			isOpen={isOpen}
			openDrawer={openDrawer}
		/>
	</div>
);

export default MainHeader;
