import React, { Fragment } from 'react';

import Typography from './Typography';

const ShowUsers = props => {
	return (
		<Fragment>
			<div className="dashboard__users-card">
				<div className="options__big-box-container">
					<div className="options__big-box">
						<Typography
							headingTertiary="Users"
							classname="u-center-text u-pb-10"
						/>
						<hr />
						{/* USERS LIST */}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ShowUsers;
