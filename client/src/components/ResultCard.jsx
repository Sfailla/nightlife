import React from 'react';

import defaultImgSrc from '../images/bar-default-img.jpg';
import Button from './Button';
import { truncate, changeNumToStar } from '../utils/functions';

const ResultCard = props => {
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
						<p className="results__rating">
							{changeNumToStar(props.rating)}
						</p>
					</div>
					{props.isLoggedIn && (
						<div className="results__button-wrapper">
							<Button
								// addStyles={styles.addButton}
								className="results__card-button--add"
								type="submit"
								disabled={props.disableAddEventButton(
									props.name,
									props.events
								)}
								onClick={() =>
									props.addEvent(
										props.name,
										props.rating,
										props.image
									)}
								name="Add Event"
							/>
							<a
								className="results__card-button--link"
								href={props.moreInfoLink}
								target="_blank"
								rel="noopener nofollow"
							>
								<Button
									type="submit"
									name="See more details"
									onClick={props.getMoreInfo}
									className="results__card-button--details"
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
