import React from 'react';
import Typography from './Typography';
import Button from './Button';
import { truncateRes } from '../utils/functions';

const MyEvents = props => {
	const styles = {
		content: {
			height: 'auto',
			width: '100%'
		},
		ul: {},
		li: {
			listStyle: 'none',
			letterSpacing: '2px',
			textTransform: 'uppercase'
		},
		eventWrapper: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: '3.5rem',
			width: '100%',
			marginTop: '1rem',
			padding: '0 1rem',
			background: 'var(--primary-color)',
			color: 'var(--secondary-color)',
			boxShadow: 'var(--box-shadow-md-d)'
		}
	};
	return (
		<div className="dashboard__event-component">
			<div className="event event__event-container">
				<div className="event__box">
					<Typography
						headingTertiary="Events"
						classname="u-center-text u-mb-10"
					/>
					<hr />
					<div style={styles.content} className="event__content">
						<ul style={styles.ul}>
							{props.events.length > 0 ? (
								props.events.map(event => {
									return (
										<div
											key={event._id}
											style={styles.eventWrapper}
										>
											<li
												className="event__li"
												style={styles.li}
											>
												{truncateRes(event.name, 15)}
											</li>
											<Button
												name="delete"
												type="button"
												onClick={() =>
													props.handleRemoveEvent(
														event._id
													)}
											/>
										</div>
									);
								})
							) : (
								<h3>Sorry No Events</h3>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyEvents;
