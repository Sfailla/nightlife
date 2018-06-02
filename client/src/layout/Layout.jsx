import React from 'react';

import AppHeader from '../objects/AppHeader';
import SideNav from '../objects/SideNav';
import Search from '../sections/Search';

import Dashboard from '../sections/Dashboard';

const Layout = (props) => (
    <div className="home__grid-container">
            <AppHeader />
        <div className="home__side-nav">
            <SideNav />
        </div>
        <div className="home__main">
            {/* <Search /> */}
            <Dashboard />
        </div>
    </div>
);

export default Layout;