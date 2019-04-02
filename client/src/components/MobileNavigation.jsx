import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mobileNavStyle = `
  .side-drawer__nav-li a {
		display: block;
    font-size: 3rem;
    font-weight: bold;
  }
  .side-drawer__nav-ul {
    display: flex;
    flex-direction: column;
  }
  .side-drawer__nav-li {
    list-style: none;
    margin-bottom: 2rem;
  }
  .side-drawer__nav-link {
    text-align: left;
    text-decoration: none;
    color: var(--color-gold);
  }
  .side-drawer__nav-link:hover {
    color: var(--secondary-color);
    transition: color .2s ease-in-out;
  }
`;

document.head.appendChild(
	document.createElement('style')
).textContent = mobileNavStyle;

const MobileNavigation = props => {
	return (
		<Fragment>
			<ul className="side-drawer__nav-ul">
				{props.user.isLoggedIn && (
					<li className="side-drawer__nav-li">
						<Link to="/dashboard" className="side-drawer__nav-link">
							DASHBOARD
						</Link>
					</li>
				)}
				{props.user.isLoggedIn && (
					<li className="side-drawer__nav-li">
						<Link to="/account" className="side-drawer__nav-link">
							ACCOUNT
						</Link>
					</li>
				)}
				<li className="side-drawer__nav-li">
					<Link to="/" className="side-drawer__nav-link">
						SEARCH
					</Link>
				</li>
				{!props.user.isLoggedIn && (
					<li className="side-drawer__nav-li">
						<Link to="/sign-up" className="side-drawer__nav-link">
							REGISTER
						</Link>
					</li>
				)}
				{!props.user.isLoggedIn && (
					<li className="side-drawer__nav-li">
						<Link to="/sign-in" className="side-drawer__nav-link">
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

MobileNavigation.propTypes = {};

export default connect(mapStateToProps)(MobileNavigation);
