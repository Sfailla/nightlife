import React from 'react';
import PropTypes from 'prop-types';

import ResultCard from './ResultCard';

const SearchResults = ({
	events,
	results,
	history,
	isLoggedIn,
	initializeEventData
}) => {
	return (
		<div>
			{results.map(data => (
				<ResultCard
					key={data.id}
					name={data.name}
					location={data.location.address1}
					rating={data.rating}
					moreInfoLink={data.url}
					image={data.image_url}
					imageAlt="bar images"
					isLoggedIn={isLoggedIn}
					history={history}
					moreInfoLink={data.url}
					initializeEventData={initializeEventData}
					events={events}
				/>
			))}
		</div>
	);
};

SearchResults.propTypes = {
	isLoggedIn: PropTypes.bool,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	name: PropTypes.string
};

export default SearchResults;
