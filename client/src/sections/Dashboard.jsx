import React from 'react';
import PropTypes from 'prop-types';
import authorize from '../utils/AuthClass';

import ShowUsers from '../components/ShowUsers';
import Typography from '../components/Typography';
import MyEvents from '../components/MyEvents';
import Avatar from '../components/Avatar';
import { Icon } from '../components/Icon';
import UserDetails from '../components/UserDetails';

class Dashboard extends React.PureComponent {
	state = {
		username: '',
		company: '',
		location: '',
		email: '',
		description: '',
		events: [],
		users: [],
		user: this.props.currentUser
	};

	handleRemoveEvent = id => {
		authorize
			.authFetch(`/users/events/${id}`, { method: 'DELETE' })
			.then(res => res.json())
			.then(res => {
				this.setState(prevState => ({
					events: prevState.events.filter(event => event._id !== id)
				}));
			});
	};

	initializeUserBio = () => {
		authorize
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
		authorize
			.authFetch('/users/settings', {
				method: 'GET'
			})
			.then(event => event.json())
			.then(event => {
				let events = event.events;
				this.setState({
					events
				});
			});
	};

	initializeShowUsers = async () => {
		const uid = this.state.user.currentUser._id;
		let loadedUsers = [];

		const response = await fetch('/users/usersList', {
			method: 'GET'
		});

		const users = await response.json();

		users.map(async user => {
			if (user._id !== uid) {
				await loadedUsers.push(user);
				await this.setState({
					users: loadedUsers
				});
			}
		});
	};

	displayUsers = () =>
		this.state.users &&
		this.state.users.map(user => {
			let styles = {
				svg: {
					fill: user.isLoggedIn ? '#57e657' : '#ff0000'
				}
			};
			return (
				<li key={user._id}>
					<div className="show-users__flex-container">
						<div className="show-users__flex-container">
							<Avatar avatar={user.settings.avatar} size={5} />
							<Typography headingTertiary={user.username} />
						</div>
						<div className="show-users__icon-wrapper">
							<Icon
								icon="circle"
								addStyles={styles.svg}
								size={20}
								view1={24}
								view2={28}
							/>
						</div>
					</div>
				</li>
			);
		});

	componentDidMount = () => {
		this.initializeEventData();
		this.initializeShowUsers();
		this.initializeUserBio();
	};

	render() {
		return (
			<div className="dashboard__container">
				<div className="dashboard__dashboard-card-layout">
					<div className="dashboard__title-wrapper">
						<Typography
							headingPrimary="Dashboard"
							className="dashboard__title"
						/>
						<Typography
							headingSecondary="Here are your saved settings"
							className="dashboard__sub-title"
						/>
					</div>

					{this.state.users && (
						<ShowUsers
							displayUsers={this.displayUsers}
							users={this.state.users}
						/>
					)}

					<MyEvents
						events={this.state.events}
						handleRemoveEvent={this.handleRemoveEvent}
					/>

					<UserDetails
						company={this.state.company}
						location={this.state.location}
						description={this.state.description}
						email={this.state.email}
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
