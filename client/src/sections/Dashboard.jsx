import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/AuthClass';

import ShowUsers from '../components/ShowUsers';
import Typography from '../components/Typography';
import MyEvents from '../components/MyEvents';

class Dashboard extends React.Component {
	state = {
		username: '',
		company: '',
		location: '',
		email: '',
		description: '',
		events: [],
		users: [],
		currentUser: this.props.currentUser
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
				// console.log(events);
				this.setState({
					events
				});
			});
	};

	initializeShowUsers = () => {
		const uid = this.state.currentUser.currentUser._id;
		let loadedUsers = [];

		fetch('/users/usersList', {
			method: 'GET'
		})
			.then(users => users.json())
			.then(users => {
				users.map(user => {
					if (user._id !== uid) {
						loadedUsers.push(user.username);
						// console.log(loadedUsers);
						this.setState({
							users: loadedUsers
						});
					}
				});
			});
	};

	componentDidMount = () => {
		this.initializeEventData();
		this.initializeShowUsers();
		setTimeout(() => {
			console.log(this.state.users);
		}, 500);
	};

	render() {
		return (
			<div className="dashboard__container">
				<div className="dashboard__title-wrapper">
					<Typography headingPrimary="Dashboard" classname="dashboard__title" />
					<Typography
						headingSecondary="What would you like to do?"
						classname="dashboard__sub-title"
					/>
				</div>
				<div className="dashboard__layout">
					<ShowUsers
						users={this.state.users}
						company={this.state.company}
						location={this.state.location}
						description={this.state.description}
						email={this.state.email}
						logout={this.props.logout}
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
