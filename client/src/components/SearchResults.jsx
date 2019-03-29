import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../utils/AuthClass';
import defaultImgSrc from '../images/bar-default-img.jpg';
import Button from './Button';
import { truncate, changeNumToStar } from '../utils/functions';

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

class SearchResComponent extends React.Component {
	state = {
		events: []
	};
	Auth = new Auth();

	addEvent = () => {
		let name = this.props.name;
		let rating = this.props.rating;
		let image = this.props.image;

		this.Auth
			.authFetch('/users/events', {
				method: 'POST',
				body: JSON.stringify({ name, rating, image })
			})
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState(() => ({ events: data }));
				this.props.history.push('/dashboard');
			})
			.catch(err => console.log(err));
	};
	componentDidMount = () => {};

	render() {
		this.state.events && console.log(this.state.events);
		return (
			<div className="results__card">
				<div className="results__card--left">
					<img
						src={
							this.props.image !== '' &&
							typeof this.props.image === 'string' ? (
								this.props.image
							) : (
								defaultImgSrc
							)
						}
						alt={this.props.imageAlt}
					/>
				</div>
				<div className="results__card--right">
					<div className="results__inner-container">
						<div className="results__name-location-wrapper">
							<h2 className="heading-secondary results__name">
								{window.innerWidth > 50 ? (
									truncate(this.props.name, 25)
								) : (
									truncate(this.props.name, 5)
								)}
							</h2>
							<p className="results__location">{this.props.location}</p>
							<p style={styles.rating}>{changeNumToStar(this.props.rating)}</p>
						</div>
						{this.props.isLoggedIn && (
							<div className="button-wrapper">
								<Button
									addStyles={styles.eventButton}
									type="submit"
									// disabled={this.state.events.map(event => {
									// 	event.name === this.props.name ? true : false;
									// })}
									onClick={this.addEvent}
									name="Add to My Events"
								/>
								<a
									style={styles.a}
									href={this.props.moreInfoLink}
									target="_blank"
									rel="noopener"
								>
									<Button
										type="submit"
										addStyles={styles.detailsButton}
										name="See more details"
										onClick={this.getMoreInfo}
									/>
								</a>
							</div>
						)}
						{!this.props.isLoggedIn && (
							<div className="results__lower-box">
								Register for more options
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

SearchResComponent.propTypes = {
	isLoggedIn: PropTypes.bool,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	addEvent: PropTypes.func,
	name: PropTypes.string
};

export default SearchResComponent;
