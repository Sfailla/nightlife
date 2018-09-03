import React from 'react';
import Typography from './Typography';

const MyEvents = () => {
	const styles = {
		content: {
			height: 'auto',
			width: '100%'
		},
		ul: {},
		li: {
			listStyle: 'none',
			height: '3rem',
			width: '100%',
			marginTop: '1rem',
			paddingLeft: '1rem',
			background: 'var(--primary-color)',
			color: 'var(--color-gold)',
			display: 'flex',
			justifyContent: 'left',
			alignItems: 'center',
			letterSpacing: '2px',
			textTransform: 'uppercase',
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
						<ul>
							<li className="event__li" style={styles.li}>
								JAY'S PUB
							</li>
							<li className="event__li" style={styles.li}>
								MATRIX CLUB
							</li>
							<li className="event__li" style={styles.li}>
								123 MADEUP CLUB
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyEvents;
