import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '../components/Avatar';
import LogoutButton from '../components/LogoutButton';

const MainHeaderList = props => {
	const styles = {
		list: {
			width: props.isLoggedIn ? '22rem' : 'auto',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		link: {
			textDecoration: 'none',
			color: 'blue'
		}
	};
	return (
		<div style={styles.list}>
			{props.isLoggedIn && props.user.username}
			{props.isLoggedIn && <Avatar avatar={props.user.avatar} />}
			{props.isLoggedIn ? (
				<LogoutButton name="sign out" logout={props.logout} />
			) : (
				<Link style={styles.link} to="/sign-in">
					SIGN IN
				</Link>
			)}
		</div>
	);
};

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
