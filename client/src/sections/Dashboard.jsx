import React from 'react';
import Auth from '../utils/AuthClass';

import UserDetailsList from '../components/UserDetailsList';
import Typography from '../components/Typography';

class Dashboard extends React.Component {
	state = {
		username: '',
		company: '',
		location: '',
		email: '',
		description: ''
	};
	Auth = new Auth();

	componentDidMount = () => {};

	render() {
		return (
			<div className="dashboard__container">
				<div className="dashboard__title-wrapper">
					<Typography
						headingPrimary="Dashboard"
						classname="dashboard__title"
					/>
					<Typography
						headingSecondary="What would you like to do?"
						classname="dashboard__sub-title"
					/>
				</div>
				<div className="dashboard__layout">
					<div className="dashboard__options-component">
						<div className="options__box-container">
							<div className="options__box">SEARCH</div>
							<div className="options__box">SETTINGS</div>
							<div className="options__box">HIDE EVENTS</div>
							<div className="options__box">LOG OFF</div>
						</div>
						<div className="options__big-box-container">
							<div className="options__big-box">
								<Typography
									headingTertiary="User Info"
									classname="u-center-text u-mb-10"
								/>
								<hr />

								<UserDetailsList />
							</div>
						</div>
					</div>
					<div className="dashboard__event-component">
						<div className="event event__event-container">
							<div className="event__box">
								<Typography
									headingTertiary="Events"
									classname="u-center-text u-mb-10"
								/>
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
