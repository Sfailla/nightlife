import React from 'react';

import Button from './Button';
import { Icon } from './Icon';
import { truncate } from '../utils/functions';

const Event = props => {
	const styles = {
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
			// justifyContent: 'space-between',
			// alignItems: 'center',
			// borderRadius: '3px',
			height: '8rem',
			width: '100%',
			marginTop: '1rem',
			// background: 'var(--primary-color)',
			backgroundImage:
				'linear-gradient(to right, var(--secondary-color), var(--primary-color))',
			color: 'white',
			boxShadow: 'var(--box-shadow-sm-l)'
		},
		body: {
			padding: '.5rem',
			width: '80%',
			height: '100%'
			// background: 'lightpink'
		},
		imgWrapper: {
			padding: '.5rem',
			width: '20%',
			height: '100%'
		},
		image: {
			height: '100%',
			borderRadius: '5px'
		}
	};
	return (
		<ul style={styles.ul}>
			<li className="event__li" style={styles.li}>
				<div style={styles.eventWrapper}>
					<div style={styles.imgWrapper}>
						<img style={styles.image} src={props.image} />
					</div>
					<div style={styles.body}>
						{truncate(props.name, 20)}

						<Button
							name={<Icon size={25} view1={25} view2={25} icon="trash" />}
							addStyles={styles.svg}
							type="button"
							onClick={() => props.handleRemoveEvent(porps.id)}
						/>
					</div>
				</div>
			</li>
		</ul>
	);
};

export default Event;
