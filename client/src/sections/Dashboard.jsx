import React from 'react';
import Auth from '../utils/AuthClass';

import DashNavOptions from '../objects/DashNavOptions';
import DashLowerContent from '../objects/DashContent';
import GoingOut from '../components/GoingOut';
import Typography from '../components/Typography';

class Dashboard extends React.Component {
	state = { username: '' };
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
				<div>
					<div className="dashboard__avatar-card">Avatar</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
