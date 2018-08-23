import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAvatar } from '../actions/users';
import DashOptions from '../objects/DashOptions';
import DashLowerContent from '../objects/DashContent';
import GoingOut from '../components/GoingOut';
import Auth from '../utils/AuthClass';

class Dashboard extends Component {
	state = { username: '' };
	Auth = new Auth();

	// checkAvatar = () => {
	// 	this.Auth
	// 		.authFetch('/users/settings')
	// 		.then(res => res.json())
	// 		.then(res => {
	// 			const response = res[0];
	// 			// console.log(response);
	// 			if (response.utilities.initialRender === true) {
	// 				this.initializeAvatar();
	// 			}
	// 			if (response.utilities.initialRender === false) {
	// 				// console.log('non-initial', response);
	// 			}
	// 		});
	// };

	// initializeAvatar = () => {
	// 	this.Auth
	// 		.authFetch('/users/settings/initialize', {
	// 			method: 'PATCH'
	// 		})
	// 		.then(result => result.json())
	// 		.then(result => {
	// 			return result;
	// 		})
	// 		.catch(err => {
	// 			throw err;
	// 		});
	// };

	componentDidMount = () => {
		// this.checkAvatar();
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

export default connect()(Dashboard);
