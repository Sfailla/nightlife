import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainSideNav = props => (
	<div className="side-nav">
		<div className="side-nav__nav-list-group">
			<div className="side-nav__logo">NL</div>
			<ul className="side-nav__nav-items">
				<li>
					<Link to="/">
						<span>Search</span>
					</Link>
				</li>
				{props.isLoggedIn && (
					<li>
						<Link to="/dashboard">
							<span>Dashboard</span>
						</Link>
					</li>
				)}
				{props.isLoggedIn && (
					<li>
						<Link to="/account">
							<span>Account</span>
						</Link>
					</li>
				)}
				{props.isLoggedIn ? null : (
					<li>
						<Link to="/sign-up">
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
