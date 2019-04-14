import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const mobileNavStyle = `
//   .side-drawer__li a {
// 		display: block;
//     font-size: 3rem;
//     font-weight: bold;
//   }
//   .side-drawer__ul {
//     display: flex;
//     flex-direction: column;
//   }
//   .side-drawer__li {
//     list-style: none;
//     margin-bottom: 2rem;
//   }
//   .side-drawer__link {
//     text-align: left;
//     text-decoration: none;
//     color: var(--color-gold);
//   }
//   .side-drawer__link:hover {
//     color: var(--secondary-color);
//     transition: color .2s ease-in-out;
//   }
// `;

// document.head.appendChild(
// 	document.createElement('style')
// ).textContent = mobileNavStyle;

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
