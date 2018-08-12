import React from 'react';

import defaultImgSrc from '../images/bar-default-img.jpg';
import Button from './Button';
import { truncateRes } from '../utils/functions';

const styles = {
	button: {
		width: '15rem',
		border: 'none',
		borderRadius: '2px',
		color: 'white',
		fontWeight: 'bold',
		background: 'var(--secondary-color)'
	}
};

const SearchResComponent = ({ imageSrc, imageAlt, name, location, isLoggedIn }) => (
	<div className="results__container">
		<div className="results__card">
			<div className="results__card--left">
				<img src={imageSrc !== '' && typeof imageSrc === 'string' ? imageSrc : defaultImgSrc} alt={imageAlt} />
			</div>
			<div className="results__card--right">
				<div className="results__inner-container">
					<div className="results__name-location-wrapper">
						<h2 className="heading-secondary results__name">{truncateRes(name)}</h2>
						<p className="results__location">{location}</p>
					</div>
					{isLoggedIn && (
						<div className="results__buttons">
							<Button addStyles={styles.button} type="submit" name="Add to Favorites" />
							<Button addStyles={styles.button} name="going here" />
						</div>
					)}
					{isLoggedIn && <div className="results__lower-box">Number of people attending: 0</div>}
					{!isLoggedIn && <div className="results__lower-box">Sign in to see whose going where</div>}
				</div>
			</div>
		</div>
	</div>
);

export default SearchResComponent;
