import React from 'react';
import { connect } from 'react-redux';

import api from '../api/yelpAPI.json';
import SearchCard from '../components/SearchCard';
import Typography from '../components/Typography';
import authorize from '../utils/AuthClass';
import ResultsPage from './Results';
import image from '../images/bar-scene-opt.png';

class Search extends React.Component {
	state = {
		searchVal: '',
		hasResults: false,
		isLoading: false,
		searchResults: [],
		events: [],
		errors: ''
	};

	// getToken = () => {
	// 	return api.yelp.token;
	// };

	initializeEventData = async () => {
		try {
			let result = await authorize.authFetch('/users/settings', {
				method: 'GET'
			});
			let data = await result.json();
			this.setState({ events: data.events });
		} catch (error) {
			console.error(error);
		}
	};

	addEvent = async (name, rating, image) => {
		try {
			const res = await authorize.authFetch('/users/events', {
				method: 'POST',
				body: JSON.stringify({ name, rating, image })
			});
			res.json();
			return await this.initializeEventData();
		} catch (err) {
			return console.error(err);
		}
	};

	disableAddEventButton = (name, events) => {
		let eventMap = events.map(event => {
			return event.name;
		});

		if (eventMap.includes(name)) {
			return true;
		} else {
			return false;
		}
	};

	handleFetchData = async searchVal => {
		const controller = new AbortController();
		const { signal } = controller;

		const value = searchVal.toLowerCase().toString().trim();

		this.setState(() => ({ isLoading: true }));
		try {
			const url = `${api.yelp
				.baseURL}location=${value}&limit=15&term=nightclubs,bars`;
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`
				},
				signal
			});
			const res = await response.json();
			if (res.businesses.length) {
				this.setState({
					searchResults: res.businesses,
					isLoading: false,
					hasResults: true,
					searchVal: '',
					errors: ''
				});
			}
			this.initializeEventData();
		} catch (error) {
			this.setState(() => ({
				errors: error,
				isLoading: false
			}));
			controller.abort();
		}
	};

	handleClearSearch = () => {
		this.setState(() => ({ searchResults: [], hasResults: false }));
	};

	render() {
		const styles = {
			background: {
				height: '100%',
				position: 'relative'
			}
		};

		return (
			<div style={styles.background} id="search" className="search">
				<div className="search__container">
					<div className="search__header">
						<Typography
							headingPrimary="Welcome To NightLife"
							className="search__heading"
						/>
					</div>

					<div
						style={{
							background: `url(${image}) no-repeat center / cover`
						}}
						className="search__background"
					>
						<Typography
							headingSecondary="See what's going on tonight!"
							className="search__heading-secondary u-center-text"
						/>
					</div>

					<div className="search__body">
						<SearchCard
							handleOnChange={this.handleOnChange}
							handleOnSubmit={this.handleOnSubmit}
							handleFetchData={this.handleFetchData}
							errors={this.state.errors}
						/>

						<ResultsPage
							findResults={this.findResults}
							isLoading={this.state.isLoading}
							searchResults={this.state.searchResults}
							results={this.state.searchResults}
							events={this.state.events}
							isLoggedIn={this.props.user.isLoggedIn}
							history={this.props.history}
							addEvent={this.addEvent}
							hasResults={this.state.hasResults}
							initializeEventData={this.initializeEventData}
							disableAddEventButton={this.disableAddEventButton}
							handleClearSearch={this.handleClearSearch}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(Search);
