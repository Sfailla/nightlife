import React from 'react';

import AppHeader from '../objects/AppHeader';
import SideNav from '../components/SideNav';
import Search from '../sections/Search';
import Account from '../sections/Account';

import Dashboard from '../sections/Dashboard';

const Layout = () => (
    <div className="home__grid-container">
            <AppHeader />
        <div className="home__side-nav">
            <SideNav />
        </div>
        <div className="home__main-page-area">
            <Dashboard />
            {/* <Search /> */}
            {/* <Account /> */}
        </div> 
    </div>
);

export default Layout;