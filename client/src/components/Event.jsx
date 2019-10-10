import React from 'react';

import Button from './Button';
import { Icon } from './Icon';
import { truncate, changeNumToStar } from '../utils/functions';

const Event = props => {
	const styles = {
		li: {
			listStyle: 'none',
			letterSpacing: '2px',
			textTransform: 'uppercase',
			height: '8rem',
			width: '100%',
			marginTop: '1rem',
			background: 'var(--primary-color)',
			color: 'white',
			boxShadow: 'var(--box-shadow-sm-l)',
			display: 'flex',
			borderRadius: '3px'
		},
		svg: {
			background: 'transparent',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fill: 'var(--secondary-color)'
		},
		body: {
			padding: '.5rem',
			width: '80%',
			height: '100%'
		},
		imgWrapper: {
			padding: '.5rem',
			width: '20%',
			height: '100%'
		},
		image: {
			height: '100%',
			borderRadius: '5px'
		},
		h3: {
			paddingLeft: '4px',
			fontWeight: '400',
			fontSize: '2rem'
		}
	};
	return (
		<li className="events__li" style={styles.li}>
			<div style={styles.imgWrapper}>
				<img style={styles.image} src={props.image} />
			</div>
			<div style={styles.body}>
				<h3 style={styles.h3}>{truncate(props.name, 20)}</h3>
				<span className="events__rating">
					{changeNumToStar(props.rating)}
				</span>

				<div className="events__button-wrapper">
					<Button
						name={
							<Icon size={25} view1={32} view2={32} icon="trash" />
						}
						addStyles={styles.svg}
						type="button"
						onClick={() => props.handleRemoveEvent(props.id)}
					/>
				</div>
			</div>
		</li>
	);
};

export default Event;
