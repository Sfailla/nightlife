import React, { Fragment } from 'react';

import Typography from './Typography';

const ShowUsers = props => {
	return (
		<Fragment>
			<div className="dashboard__user-card">
				<div className="dashboard__user-card-container">
					<Typography
						headingTertiary="Users"
						classname="u-center-text u-pb-10"
					/>
					<hr />
					{/* USERS LIST */}
				</div>
			</div>
		</Fragment>
	);
};

export default ShowUsers;
