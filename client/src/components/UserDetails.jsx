import React, { Fragment } from 'react';
import Typography from './Typography';
import Biography from './Biography';
const UserDetails = props => {
	return (
		<Fragment>
			<div className="user-info">
				<div className="user-info__heading-wrapper">
					<Typography headingTertiary="User Details" />
					<hr />
				</div>
				<div className="user-info__content-wrapper">
					<ul className="user-info__about-group">
						<Biography heading="Company" content={props.company} />
						<Biography heading="Email" content={props.email} />
						<Biography heading="Location" content={props.location} />
						<Biography
							heading="Description"
							content={props.description}
							large
						/>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};

export default UserDetails;
