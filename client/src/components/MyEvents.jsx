import React from 'react';

import Typography from './Typography';
import Event from './Event';

const MyEvents = props => {
	const styles = {
		content: {
			height: 'auto',
			width: '100%'
		}
	};
	return (
		<div className="events__event-card">
			<div className="events__event-card-container">
				<div className="events__my-events">
					<Typography headingTertiary="My Events" classname="" />
					<hr />
					<div style={styles.content} className="event__content">
						{props.events.length > 0 ? (
							props.events.map(event => {
								return (
									<Event
										key={event._id}
										id={event._id}
										image={event.image}
										name={event.name}
									/>
								);
							})
						) : (
							<h3>Sorry No Events</h3>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyEvents;
