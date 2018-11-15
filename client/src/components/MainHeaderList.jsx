import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import LogoutButton from './LogoutButton';
import HamburgerMenu from 'react-hamburger-menu';

class MainHeaderList extends React.Component {
	render() {
		const styles = {
			list: {
				width: this.props.isLoggedIn ? '22rem' : 'auto'
			}
		};
		let index = {
			zIndex: '10'
		};
		return (
			<Fragment>
				<div className="mobile-nav list" style={styles.list}>
					{this.props.isLoggedIn && this.props.user.username}
					{this.props.isLoggedIn && <Avatar avatar={this.props.user.avatar} />}
					{this.props.isLoggedIn ? (
						<LogoutButton
							addStyles={{ width: '10rem' }}
							name="sign out"
							logout={this.props.logout}
						/>
					) : (
						<Link className="app-header__link" to="/sign-in">
							LOGIN
						</Link>
					)}
				</div>
				<div className="mobile-nav-menu" style={{ zIndex: '100' }}>
					<HamburgerMenu
						style={index}
						isOpen={this.props.isOpen}
						menuClicked={this.props.openDrawer}
						width={40}
						height={30}
						strokeWidth={2}
						rotate={0}
						color="white"
						borderRadius={0}
						animationDuration={0.5}
					/>
				</div>
			</Fragment>
		);
	}
}

MainHeaderList.propTypes = {
	isLoggedIn: PropTypes.bool,
	logout: PropTypes.func,
	user: PropTypes.object
};

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

const tabView = `
	.list {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.link {
		text-decoration: none;
	}

	.mobile-nav-menu {
		z-index: 10;
	}
	
	@media (max-width: 31.25em) {
		.mobile-nav-menu {
			display: flex;
		}
		.list {
			display: none;
		}
	}

	@media (min-width: 31.25em) {
		.mobile-nav-menu {
			display: none;
		}
	}

	@media (min-width: 31.25em) {
		.mobile-nav {
			display: flex;
		}
	}
`;
document.head.appendChild(
	document.createElement('style')
).textContent = tabView;

export default connect(mapStateToProps)(MainHeaderList);
