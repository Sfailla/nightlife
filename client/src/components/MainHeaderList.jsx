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
			textDecoration: 'none'
		}
	};
	return (
		<div style={styles.list}>
			{props.isLoggedIn && props.user.username}
			{props.isLoggedIn && <Avatar avatar={props.user.avatar} />}
			{props.isLoggedIn ? (
				<LogoutButton
					addStyles={{ width: '10rem' }}
					name="sign out"
					logout={props.logout}
				/>
			) : (
				<Link style={styles.link} className="app-header__link" to="/sign-in">
					LOGIN
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

const tabView = `
	.link {
		color: blue;
		font-size: 2rem;
	}
	@media (max-width: 1300px) {
		.link {
			color: white;
		}
	}
`;
document.head.appendChild(
	document.createElement('style')
).textContent = tabView;
