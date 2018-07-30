import React from 'react';

import Button from '../components/Button';
import guyAvatar from '../images/person-guy-flat.png';
import { Link } from 'react-router-dom';

const MainHeaderList = (props) => (
	<ul className="app-header-list">
		{props.isLoggedIn && <li>Stevo914</li>}

		{props.isLoggedIn && (
			<li>
				<img className="app-header-list__avatar-img" src={guyAvatar} alt="avatar-profile" />
			</li>
		)}
		{props.isLoggedIn ? <Logout logout={props.logout} /> : <AuthLink />}
	</ul>
);

const AuthLink = () => (
	<li>
		<Link to="/sign-in">sign in</Link>
	</li>
);

const styles = { backgroundColor: 'red' };

const Logout = (props) => {
	return (
		<li>
			<Button addStyles={styles} name="sign out" onClick={props.logout} />
		</li>
	);
};

export default MainHeaderList;
