import React from 'react';

import { Link } from 'react-router-dom';
import guyAvatar from '../images/person-guy-flat.png';

const SideNavList = (props) => (
	<ul className="app-header-list">
		<li>
			<Link to="/sign-in">sign in</Link>
		</li>
		{props.isLoggedIn && (
			<li>
				<img className="app-header-list__avatar-img" src={guyAvatar} alt="avatar-profile" />
			</li>
		)}
		{props.isLoggedIn && (
			<li>
				<a href="#">Stevo914</a>
			</li>
		)}
	</ul>
);

export default SideNavList;
