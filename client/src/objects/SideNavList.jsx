import React from 'react';

import { Link } from 'react-router-dom';
import guyAvatar from '../images/person-guy-flat.png';

const SideNavList = () => (
	<ul className="app-header-list">
		<li>
			<Link to="/sign-up">sign in</Link>
		</li>
		<li>
			<img className="app-header-list__avatar-img" src={guyAvatar} alt="avatar-profile" />
		</li>
		<li>
			<a href="#">Stevo914</a>
		</li>
	</ul>
);

export default SideNavList;
