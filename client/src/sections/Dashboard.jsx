import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/AuthClass';

import UserOptions from '../components/UserOptions';
import Typography from '../components/Typography';
import MyEvents from '../components/MyEvents';

class Dashboard extends React.Component {
	state = {
		username: '',
		company: '',
		location: '',
		email: '',
		description: '',
		logout: this.props.logout
	};

	Auth = new Auth();

	componentDidMount = () => {
		this.Auth
			.authFetch('/users/me', { method: 'GET' })
			.then(res => res.json())
			.then(res => {
				this.setState(() => ({
					company: res.settings.company,
					email: res.email,
					location: res.settings.location,
					description: res.settings.description
				}));
			});
	};

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
					<UserOptions
						username={this.state.username}
						company={this.state.company}
						location={this.state.location}
						description={this.state.description}
						email={this.state.email}
						logout={this.props.logout}
					/>
					<MyEvents />
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	logout: PropTypes.func
};

export default Dashboard;
