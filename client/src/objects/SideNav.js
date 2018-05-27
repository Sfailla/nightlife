import React from 'react';


const SideNav = () => (
    <div>
        <div className="logo" 
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3rem',
                color: 'var(--primary-text-color)',
                fontSize: '5rem',
            }}>
        NL
        </div>
        <ul className="side-nav">
            <li><a href="#">Search</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Sign Out</a></li>
        </ul>
    </div>
);

export default SideNav;