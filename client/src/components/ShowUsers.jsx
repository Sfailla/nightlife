import React, { Fragment } from 'react';

import Typography from './Typography';

const ShowUsers = props => {
	return (
		<Fragment>
			<div className="show-users__user-card">
				<div className="show-users__user-card-container">
					<div className="show-users__heading-wrapper">
						<Typography
							headingTertiary="Users"
							addStyles={{ fontSize: '1.6rem' }}
						/>
						<p>online/offline</p>
					</div>
					<div className="show-users__bottom-card">
						<hr />
						<ul className="show-users__content">{props.displayUsers()}</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ShowUsers;
