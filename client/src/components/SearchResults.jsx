import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../utils/AuthClass';
import ResultCard from './ResultCard';

class SearchResComponent extends React.Component {
	state = {
		events: []
	};

	Auth = new Auth();

	// addEvent = () => {
	// 	this.props.results.map(data => {
	// 		console.log(data.name);
	// 	});
	// 	let name = props.name;
	// 	let rating = props.rating;
	// 	let image = props.image;

	// 	this.Auth
	// 		.authFetch('/users/events', {
	// 			method: 'POST',
	// 			body: JSON.stringify({ name, rating, image })
	// 		})
	// 		.then(data => data.json())
	// 		.then(data => {
	// 			this.setState(() => ({ events: data }));
	// 			this.props.history.push('/dashboard');
	// 		})
	// 		.catch(err => console.log(err));
	// };

	initializeEventData = async () => {
		let result = await this.Auth.authFetch('/users/settings', {
			method: 'GET'
		});
		let data = await result.json();
		this.setState({ events: data.events });
	};

	componentDidMount = () => {};

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
						// addEvent={this.addEvent}
						moreInfoLink={data.url}
						initializeEventData={this.initializeEventData}
						events={this.state.events}
					/>
				))}
			</div>
		);
	}
}

SearchResComponent.propTypes = {
	isLoggedIn: PropTypes.bool,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	addEvent: PropTypes.func,
	name: PropTypes.string
};

export default SearchResComponent;
