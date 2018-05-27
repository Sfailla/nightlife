import React from 'react';

import AppHeader from '../objects/AppHeader';
import SideNav from '../objects/SideNav';


const styles = {
    minHeight: '80vh',
    marginTop: '5rem',
    backgroundColor: '#FFF',
    boxShadow: '0 1rem 2rem rgba(0, 0, 0, .45)',
}

const Layout = (props) => (
    <div className="home__grid-container" style={styles}>
            <AppHeader />
        <div className="home__side-nav">
            <SideNav />
        </div>
        <div className="home__main">
            Main
        </div>
    </div>
)

export default Layout;