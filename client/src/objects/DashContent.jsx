import React, { Fragment } from 'react';
import Typography from '../components/Typography';

const DashLowerContent = () => (
	<Fragment>
		<div className="heading-secondary dash-content__content-box--heading">
			Search anywhere for bars and clubs
		</div>
		<div className="heading-tertiary dash-content__content-box--sub-heading">
			Sign in for more options..
		</div>
		<ul className="dash-content__list">
			<li>See if anyone else is going out</li>
			<li>Keep track of your events</li>
			<li>Let people know where your going</li>
		</ul>
	</Fragment>
);

export default DashLowerContent;
