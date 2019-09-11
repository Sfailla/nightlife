import React from 'react';

import defaultImgSrc from '../images/bar-default-img.jpg';
import Button from './Button';
import { truncate, changeNumToStar } from '../utils/functions';
import Auth from '../utils/AuthClass';

const ResultCard = props => {
	const styles = {
		eventButton: {
			width: '100%',
			height: '4rem',
			border: 'none',
			color: 'white',
			fontWeight: 'bold',
			marginBottom: '1.5rem',
			background: 'var(--secondary-color)'
		},
		detailsButton: {
			width: '100%',
			height: '4rem',
			border: '2px solid var(--secondary-color)',
			color: 'white',
			fontWeight: 'bold',
			background: 'var(--primary-color)'
		},
		rating: {
			padding: '2rem 0',
			textAlign: 'center'
		},
		a: {
			textDecoration: 'none'
		}
	};

	let auth = new Auth();

	const addEvent = async () => {
		let name = props.name;
		let rating = props.rating;
		let image = props.image;
		let result = await auth.authFetch('/users/events', {
			method: 'POST',
			body: JSON.stringify({ name, rating, image })
		});
		let data = await result.json();
		props.history.push('/dashboard');
		return data;
	};

	return (
		<div className="results__card">
			<div className="results__card--left">
				<img
					alt={props.imageAlt}
					src={props.image !== '' ? props.image : defaultImgSrc}
				/>
			</div>
			<div className="results__card--right">
				<div className="results__inner-container">
					<div className="results__name-location-wrapper">
						<h2 className="heading-secondary results__name">
							{window.innerWidth > 50 ? (
								truncate(props.name, 25)
							) : (
								truncate(props.name, 5)
							)}
						</h2>
						<p className="results__location">{props.location}</p>
						<p style={styles.rating}>
							{changeNumToStar(props.rating)}
						</p>
					</div>
					{props.isLoggedIn && (
						<div className="button-wrapper">
							<Button
								addStyles={styles.eventButton}
								type="submit"
								// disabled={this.state.events.map(event => {
								// 	event.name === props.name;
								// })}
								onClick={() => addEvent()}
								name="Add Event"
							/>
							<a
								style={styles.a}
								href={props.moreInfoLink}
								target="_blank"
								rel="noopener"
							>
								<Button
									type="submit"
									addStyles={styles.detailsButton}
									name="See more details"
									onClick={props.getMoreInfo}
								/>
							</a>
						</div>
					)}
					{!props.isLoggedIn && (
						<div className="results__lower-box">
							Register for more options
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ResultCard;
