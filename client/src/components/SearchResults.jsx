import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/AuthClass';

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

class SearchResComponent extends React.Component {
	state = { events: [] };
	Auth = new Auth();
	addEvent = () => {
		const events = this.props.name;
		this.Auth
			.authFetch('/users/events', {
				method: 'PATCH',
				body: JSON.stringify({ events })
			})
			.then(data => data.json())
			.then(data => {
				this.setState(() => ({ events: data.events }));
			})
			.catch(err => console.log(err));
	};
	componentDidMount = () => {};

	render() {
		// console.log(this.state.events);
		return (
			<div className="results__container">
				<div className="results__card">
					<div className="results__card--left">
						<img
							src={
								this.props.imageSrc !== '' &&
								typeof this.props.imageSrc === 'string' ? (
									this.props.imageSrc
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
									{truncateRes(this.props.name, 25)}
								</h2>
								<p className="results__location">
									{this.props.location}
								</p>
							</div>
							{this.props.isLoggedIn && (
								<div className="results__buttons">
									<Button
										addStyles={styles.button}
										type="submit"
										onClick={this.addEvent}
										name="Add to My Events"
									/>
									<Button
										addStyles={styles.button}
										name="going here"
									/>
								</div>
							)}
							{this.props.isLoggedIn && (
								<div className="results__lower-box">
									Number of people attending: 0
								</div>
							)}
							{!this.props.isLoggedIn && (
								<div className="results__lower-box">
									Sign in to see whose going where
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

SearchResComponent.propTypes = {
	isLoggedIn: PropTypes.bool,
	location: PropTypes.string,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	addEvent: PropTypes.func,
	name: PropTypes.string
};

export default SearchResComponent;
