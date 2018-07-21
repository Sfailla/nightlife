import React from 'react';

import DashOptions from '../objects/DashOptions';
import DashLowerContent from '../objects/DashContent';
import GoingOut from '../components/GoingOut';

const Dashboard = () => (
	<div className="dashboard__container">
		<div className="dashboard__title-wrapper">
			<div className="dashboard__title heading-primary">Dashboard</div>
			<div className="dashboard__sub-title heading-secondary">What would you like to do?</div>
		</div>
		<div className="dashboard__selection">
			<DashOptions />
		</div>
		<div className="dash-content">
			<div className="lower-box dash-content__content-box">
				<GoingOut />
			</div>
			<div className="lower-box dash-content__content-box">
				<DashLowerContent />
			</div>
		</div>
	</div>
);

export default Dashboard;
