import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Icon } from './Icon';

const MainSideNav = props => (
	<div className="side-nav">
		<div className="side-nav__nav-list-group">
			<div className="side-nav__logo">NL</div>
			<ul className="side-nav__nav-items">
				<li className="side-nav__li">
					<Link to="/">
						<Icon icon="search" size={25} view1={20} view2={20} />
						<span>Search</span>
					</Link>
				</li>
				{props.isLoggedIn && (
					<li className="side-nav__li">
						<Link to="/dashboard">
							<Icon icon="dashboard" size={25} view1={24} view2={24} />
							<span>Dashboard</span>
						</Link>
					</li>
				)}
				{props.isLoggedIn && (
					<li className="side-nav__li">
						<Link to="/account">
							<Icon icon="settings" size={25} view1={32} view2={32} />
							<span>Account</span>
						</Link>
					</li>
				)}
				{props.isLoggedIn ? null : (
					<li className="side-nav__li">
						<Link to="/sign-up">
							<Icon icon="code-branch" size={25} view1={16} view2={28} />
							<span>Register</span>
						</Link>
					</li>
				)}
			</ul>

			<div className="side-nav__yelp-tag">
				<span>Powered by </span>
				<span>Yelp</span>
			</div>
		</div>
	</div>
);

MainSideNav.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default MainSideNav;
