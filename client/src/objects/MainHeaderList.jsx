import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { Link } from 'react-router-dom';

const MainHeaderList = (props) => {
	return (
		<ul className="app-header-list">
			{props.isLoggedIn && <li>{props.user.username}</li>}
			{props.isLoggedIn && (
				<li>
					<img
						className="app-header-list__avatar-img"
						src={props.user.avatar}
						alt="avatar-profile"
					/>
				</li>
			)}
			{props.isLoggedIn ? (
				<Logout logout={props.logout} />
			) : (
				<LinkToLogin />
			)}
		</ul>
	);
};

const LinkToLogin = () => (
	<li>
		<Link to="/sign-in">sign in</Link>
	</li>
);

const Logout = (props) => {
	const styles = {
		display: 'inline-block',
		width: '10rem',
		fontWeight: 'bold',
		color: 'white',
		background: 'var(--primary-color)'
	};
	return (
		<li>
			<Button
				btnType="submit"
				addStyles={styles}
				name="sign out"
				onClick={props.logout}
			/>
		</li>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(MainHeaderList);
