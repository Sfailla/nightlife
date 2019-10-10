import React from 'react';
import PropTypes from 'prop-types';

import authorize from '../utils/AuthClass';
import ResultCard from './ResultCard';

class SearchResults extends React.Component {
	state = {
		events: []
	};

	initializeEventData = async () => {
		let result = await authorize.authFetch('/users/settings', {
			method: 'GET'
		});
		let data = await result.json();
		this.setState({ events: data.events });
	};

	getEventData = async () => {
		const response = await authorize.authFetch('/users/events', {
			method: 'GET'
		});
		const event = await response.json();
		const events = event.events;
		this.setState({ events });
	};

	async componentDidMount() {
		return await this.getEventData();
	}

	render() {
		return (
			<div>
				{this.props.results.map(data => (
					<ResultCard
						key={data.id}
						name={data.name}
						location={data.location.address1}
						rating={data.rating}
						moreInfoLink={data.url}
						image={data.image_url}
						imageAlt="bar images"
						isLoggedIn={this.props.isLoggedIn}
						history={this.props.history}
						moreInfoLink={data.url}
						initializeEventData={this.initializeEventData}
						events={this.state.events}
					/>
				))}
			</div>
		);
	}
}

SearchResults.propTypes = {
	isLoggedIn: PropTypes.bool,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	addEvent: PropTypes.func,
	name: PropTypes.string
};

export default SearchResults;
