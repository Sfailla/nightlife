import React, { Fragment } from 'react';

import Typography from './Typography';

const ShowUsers = props => {
	return (
		<Fragment>
			<div className="show-users__user-card">
				<div className="show-users__user-card-container">
					<Typography
						headingTertiary="Users"
						classname="u-center-text u-pb-10"
					/>
					<hr />
					<div className="show-users__bottom-card">
						<ul className="show-users__content">{props.displayUsers()}</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ShowUsers;
