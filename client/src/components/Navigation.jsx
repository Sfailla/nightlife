import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoutButton from '../components/LogoutButton';

const navStyle = `
  .nav-ul {
    display: flex;
  }
  @media (min-width: 81.25em) {
    .nav-ul {
      display: none;
    }
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
    color: var(--color-gold);
  }
  .nav-link:hover {
    color: var(--secondary-color);
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
			{/* <MobileDropMenu /> */}
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

class MobileDropMenu extends React.Component {
	render() {
		return (
			<div className="dropdown">
				<button className="drop-button">
					<div className="drop-content">
						<ul className="mobile-nav-ul">
							<li className="mobile-nav-li">
								<Link to="/dashboard" className="nav-link">
									DASHBOARD
								</Link>
							</li>
							<li className="mobile-nav-li">
								<Link to="/account" className="nav-link">
									SETTINGS
								</Link>
							</li>
							<li className="mobile-nav-li">
								<Link to="/" className="nav-link">
									SEARCH
								</Link>
							</li>
						</ul>
					</div>
				</button>
			</div>
		);
	}
}

const dropdown = `
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .drop-button {
    width: 50px;
    height: 50px;
    background: red;
  }
  .drop-content {
    display: none;
    position: absolute;
    bottom: -30px;
    background-color: #f1f1f1;
    min-width: 160px;
    height: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown:hover .drop-content {display: block;}
  .drop-content button:hover {background-color: pink;};

  .mobile-nav-li {
    text-align: left;
    padding-left: left;
  }
`;

document.head.appendChild(
	document.createElement('style')
).textContent = dropdown;
