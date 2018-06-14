import React from 'react';

import scrollPos from '../utils/functions';

const scroll = new scrollPos();

const SideNav = () => (
    <div className="side-nav">
        <div className="side-nav__nav-list-group">
            <div className="side-nav__logo">
                NL
            </div>
            <ul className="side-nav__nav-items">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">My Events</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            <div className="side-nav__yelp-tag">
                <span>Hosted by</span>
                <span>Yelp</span>
            </div>
        </div>
    </div>
);

export default SideNav;