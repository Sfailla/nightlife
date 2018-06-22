import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => (
	<div className="side-nav">
		<div className="side-nav__nav-list-group">
			<div className="side-nav__logo">NL</div>
			<ul className="side-nav__nav-items">
				<li>
					<Link to="/">
						<span>Search</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard">
						<span>Dashboard</span>
					</Link>
				</li>
				<li>
					<Link to="/account">
						<span>Account</span>
					</Link>
				</li>
				<li>
					<Link to="/sign-up">
						<span>Sign Up</span>
					</Link>
				</li>
			</ul>

			<div className="side-nav__yelp-tag">
				<span>Hosted by </span>
				<span>Yelp</span>
			</div>
		</div>
	</div>
);

export default SideNav;
