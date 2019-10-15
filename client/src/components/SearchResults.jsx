import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ResultCard from './ResultCard';

const SearchResults = ({
	events,
	results,
	history,
	addEvent,
	isLoggedIn,
	initializeEventData,
	disableAddEventButton
}) => {
	return (
		<Fragment>
			{results.map(data => (
				<ResultCard
					key={data.id}
					name={data.name}
					location={data.location.address1}
					rating={data.rating}
					moreInfoLink={data.url}
					image={data.image_url}
					imageAlt="bar images"
					history={history}
					events={events}
					moreInfoLink={data.url}
					addEvent={addEvent}
					isLoggedIn={isLoggedIn}
					initializeEventData={initializeEventData}
					disableAddEventButton={disableAddEventButton}
				/>
			))}
		</Fragment>
	);
};

SearchResults.propTypes = {
	isLoggedIn: PropTypes.bool,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	name: PropTypes.string
};

export default SearchResults;
