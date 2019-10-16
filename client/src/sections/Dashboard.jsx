import React from 'react';
import authorize from '../utils/AuthClass';

import ShowUsers from '../components/ShowUsers';
import Typography from '../components/Typography';
import MyEvents from '../components/MyEvents';
import Avatar from '../components/Avatar';
import { Icon } from '../components/Icon';
import UserDetails from '../components/UserDetails';

class Dashboard extends React.Component {
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

	handleRemoveEvent = async id => {
		try {
			const response = await authorize.authFetch(
				`/users/events/${id}`,
				{ method: 'DELETE' }
			);
			response.json();
			this.setState(prevState => ({
				events: prevState.events.filter(event => event._id !== id)
			}));
		} catch (error) {
			console.error(error);
		}
	};

	initializeDashboardData = async () => {
		try {
			const response = await authorize.authFetch('/users/settings', {
				method: 'GET'
			});
			const data = await response.json();
			const events = data.events;
			this.setState({
				events,
				email: data.email,
				company: data.settings.company,
				location: data.settings.location,
				description: data.settings.description
			});
		} catch (error) {
			return console.error(error);
		}
	};

	initializeShowUsers = async () => {
		const uid = this.state.user.currentUser._id;
		let loadedUsers = [];
		try {
			const res = await fetch('/users/users-list', {
				method: 'GET'
			});
			const users = await res.json();
			users.map(user => {
				if (user._id !== uid) {
					loadedUsers.push(user);
				}
			});
			this.setState({
				users: loadedUsers
			});
		} catch (err) {
			return console.error(err);
		}
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

	componentDidMount() {
		this.initializeShowUsers();
		this.initializeDashboardData();
	}

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

export default Dashboard;
