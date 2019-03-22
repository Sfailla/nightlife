import React, { Fragment } from 'react';

import UserDetailsList from './UserDetailsList';
import Typography from './Typography';

const UserOptionsComponent = props => {
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
						{/* <UserDetailsList {...props} /> */}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default UserOptionsComponent;
