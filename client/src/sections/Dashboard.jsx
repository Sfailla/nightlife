import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/AuthClass';

import UserOptions from '../components/UserOptions';
import Typography from '../components/Typography';
import MyEvents from '../components/MyEvents';

class Dashboard extends React.Component {
	state = {
		details: {
			username: '',
			company: '',
			location: '',
			email: '',
			description: ''
		},
		events: []
	};

	Auth = new Auth();

	handleRemoveEvent = id => {
		this.Auth
			.authFetch(`/events/${id}`, { method: 'DELETE' })
			.then(res => res.json())
			.then(res => {
				this.setState(prevState => ({
					events: prevState.events.filter(event => event._id !== id)
				}));
			});
	};

	initializeUserData = () => {
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
			})
			.catch(err => console.log(err));
	};

	initializeEventData = () => {
		this.Auth
			.authFetch('/events', {
				method: 'GET'
			})
			.then(events => events.json())
			.then(events => {
				const mappedEvents = events.map(event => event);
				return this.setState(prevState => ({
					events: prevState.events.concat(mappedEvents)
				}));
			});
	};

	componentDidMount = () => {
		this.initializeUserData();
		this.initializeEventData();
	};

	render() {
		return (
			<div className="dashboard__container">
				<div className="dashboard__title-wrapper">
					<Typography
						headingPrimary="Dashboard"
						classname="dashboard__title"
						addStyles={{ color: 'var(--primary-text-color)' }}
					/>
					<Typography
						headingSecondary="What would you like to do?"
						classname="dashboard__sub-title"
					/>
				</div>
				<div className="dashboard__layout">
					<UserOptions
						company={this.state.company}
						location={this.state.location}
						description={this.state.description}
						email={this.state.email}
					/>
					<MyEvents
						events={this.state.events}
						handleRemoveEvent={this.handleRemoveEvent}
					/>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	logout: PropTypes.func
};

export default Dashboard;
