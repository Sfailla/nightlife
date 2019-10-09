import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const navStyle = `
  .nav-ul {
		display: flex;
	}
  .nav-li {
    list-style: none;
  }
  .nav-li:not(:last-of-type) {
    margin-right: 1rem;
  }
  .nav-link {
    text-align: left;
    text-decoration: none;
    color: var(--color-white);
  }
  .nav-link:hover {
    color: var(--link-color);
    transition: color .2s ease-in-out;
  }
`;

document.head.appendChild(
	document.createElement('style')
).textContent = navStyle;

const Navigation = props => {
	return (
		<Fragment>
			<ul className="nav-ul">
				{props.user.isLoggedIn && (
					<li className="nav-li">
						<Link to="/dashboard" className="nav-link">
							DASHBOARD
						</Link>
					</li>
				)}
				{props.user.isLoggedIn && (
					<li className="nav-li">
						<Link to="/account" className="nav-link">
							SETTINGS
						</Link>
					</li>
				)}
				<li className="nav-li">
					<Link to="/" className="nav-link">
						SEARCH
					</Link>
				</li>
				{!props.user.isLoggedIn && (
					<li className="nav-li">
						<Link to="/sign-up" className="nav-link">
							REGISTER
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

Navigation.propTypes = {};

export default connect(mapStateToProps)(Navigation);
