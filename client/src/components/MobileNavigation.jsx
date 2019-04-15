import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MobileNavigation = props => {
	return (
		<Fragment>
			<ul className="side-drawer__ul">
				{props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link to="/dashboard" className="side-drawer__link">
							DASHBOARD
						</Link>
					</li>
				)}
				{props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link to="/account" className="side-drawer__link">
							ACCOUNT
						</Link>
					</li>
				)}
				<li className="side-drawer__li">
					<Link to="/" className="side-drawer__link">
						SEARCH
					</Link>
				</li>
				{!props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link to="/sign-up" className="side-drawer__link">
							REGISTER
						</Link>
					</li>
				)}
				{!props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link to="/sign-in" className="side-drawer__link">
							SIGN IN
						</Link>
					</li>
				)}
			</ul>
		</Fragment>
	);
};

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(MobileNavigation);
