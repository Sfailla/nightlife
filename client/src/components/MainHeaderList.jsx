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
			index: {
				zIndex: '10',
				cursor: 'pointer'
			}
		};
		return (
			<Fragment>
				<div className="header">
					<ul className="header__nav-list-items">
						<li>{this.props.isLoggedIn && this.props.user.username}</li>
						<li>
							{this.props.isLoggedIn && (
								<Avatar avatar={this.props.user.avatar} />
							)}
						</li>
						<li>
							{this.props.isLoggedIn ? (
								<LogoutButton
									addStyles={{ width: '10rem' }}
									name="sign out"
									logout={this.props.logout}
								/>
							) : (
								<Link className="header__link" to="/sign-in">
									LOGIN
								</Link>
							)}
						</li>
					</ul>
				</div>
				<div className="header__nav-list-menu" style={{ zIndex: '100' }}>
					<HamburgerMenu
						style={styles.index}
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

export default connect(mapStateToProps)(MainHeaderList);
