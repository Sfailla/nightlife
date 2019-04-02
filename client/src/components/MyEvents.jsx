import React from 'react';
import Typography from './Typography';
import Button from './Button';
import { Icon } from './Icon';
import { truncate } from '../utils/functions';

const MyEvents = props => {
	const styles = {
		content: {
			height: 'auto',
			width: '100%'
		},
		li: {
			listStyle: 'none',
			letterSpacing: '2px',
			textTransform: 'uppercase'
		},
		svg: {
			background: 'var(--primary-color)',
			outline: 'none',
			border: 'none',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fill: 'var(--secondary-color)'
		},
		eventWrapper: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: '8rem',
			width: '100%',
			marginTop: '1rem',
			padding: '0 1rem',
			backgroundImage:
				'linear-gradient(to right, var(--secondary-color), var(--primary-color))',
			color: 'white',
			boxShadow: 'var(--box-shadow-sm-d)'
		},
		imgWrapper: {
			width: '7rem',
			height: '7rem'
		},
		image: {
			height: '100%',
			borderRadius: '1rem'
		}
	};
	return (
		<div className="events__event-card">
			<div className="events__event-card-container">
				<div className="events__my-events">
					<Typography headingTertiary="My Events" classname="" />
					<hr />
					<div style={styles.content} className="event__content">
						<ul style={styles.ul}>
							{props.events.length > 0 ? (
								props.events.map(event => {
									return (
										<div key={event._id} style={styles.eventWrapper}>
											<div style={styles.imgWrapper}>
												<img style={styles.image} src={event.image} />
											</div>
											<div style={styles.contentWrapper}>
												<li className="event__li" style={styles.li}>
													{truncate(event.name, 20)}
												</li>
												<Button
													name={
														<Icon
															size={25}
															view1={25}
															view2={25}
															icon="trash"
														/>
													}
													addStyles={styles.svg}
													type="button"
													onClick={() => props.handleRemoveEvent(event._id)}
												/>
											</div>
										</div>
									);
								})
							) : (
								<h3>Sorry No Events</h3>
							)}
						</ul>
					</div>
				</div>
				{/* <div className="events__show-people">
					<Typography headingTertiary="People Going" />
					<hr />
				</div> */}
			</div>
		</div>
	);
};

export default MyEvents;
