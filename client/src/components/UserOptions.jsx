import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import UserDetailsList from './UserDetailsList';
import NavBoxOptions from './NavBoxOptions';
import Typography from './Typography';

const UserOptionsComponent = props => {
	return (
		<Fragment>
			<div className="dashboard__options-component">
				<NavBoxOptions logout={props.logout} />
				<div className="options__big-box-container">
					<div className="options__big-box">
						<Typography
							headingTertiary="User Info"
							classname="u-center-text u-mb-10"
						/>
						<hr />
						<UserDetailsList {...props} />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

UserOptionsComponent.propTypes = {
	logout: PropTypes.func
};

export default UserOptionsComponent;
