import React, { Component } from 'react';

import DashOptions from '../objects/DashOptions';
import DashLowerContent from '../objects/DashContent';
import GoingOut from '../components/GoingOut';
import Auth from '../utils/AuthComponent';

class Dashboard extends Component {
	Auth = new Auth();

	loadAvatar = () => {
		this.Auth
			.authFetch('/users/settings/avatar', { method: 'GET' })
			.then(user => user.json())
			.then(user => {
				console.log(user[0]);
				if (user[0].settings.avatar === null) {
					this.initializeAvatar();
				}
				if (typeof user[0].settings.avatar === 'string') {
				}
			});
	};

	initializeAvatar = () => {
		this.Auth
			.authFetch('/users/settings/initialize-avatar', {
				method: 'PATCH'
			})
			.then(res => res.json())
			.then(res => {
				console.log(res);
			});
	};

	componentWillMount = () => {
		this.loadAvatar();
	};

	render() {
		return (
			<div className="dashboard__container">
				<div className="dashboard__title-wrapper">
					<div className="dashboard__title heading-primary">
						Dashboard
					</div>
					<div className="dashboard__sub-title heading-secondary">
						What would you like to do?
					</div>
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
	}
}

export default Dashboard;
