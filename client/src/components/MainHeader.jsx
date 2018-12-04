import React from 'react';
import Navigation from '../components/Navigation';

import MainHeaderList from '../components/MainHeaderList';

const MainHeader = ({ isLoggedIn, logout, openDrawer, isOpen }) => (
	<div id="app-header" className="home__app-header">
		<div className="home__navigation">
			<Navigation />
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
