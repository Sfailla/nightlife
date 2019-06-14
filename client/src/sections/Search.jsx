import React from 'react';
import { connect } from 'react-redux';

import api from '../api/yelpAPI.json';
import SearchCard from '../components/SearchCard';
import SearchResults from '../components/SearchResults';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Loader from '../components/Loader';

class Search extends React.Component {
	state = {
		searchVal: '',
		results: [],
		hasResults: false,
		events: [],
		isLoading: false,
		errors: ''
	};

	handleOnSubmit = evt => {
		evt.preventDefault();

		if (this.state.searchVal.length) {
			evt.target.elements[0].value = '';
			this.setState(() => ({ errors: '' }));
			this.handleFetchData();
		} else {
			this.setState(() => ({
				errors: '** you must enter a location to search **'
			}));
		}
	};

	handleOnChange = evt => {
		const { value } = evt.target;
		this.setState(() => ({ searchVal: value, errors: '' }));
	};

	getToken = () => {
		return api.yelp.token;
	};

	addEvent = event => {
		this.setState(() => ({ events: [ ...this.state.events, event ] }));
	};

	handleFetchData = () => {
		this.setState(() => ({ isLoading: true }));
		fetch(`${api.yelp.baseURL}location=${this.state.searchVal}&limit=15&term=nightclubs, bars`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${this.getToken()}`
			}
		})
			.then(res => {
				if (res.status >= 200 && res.status <= 300) {
					return res.json();
				} else {
					if (res.status > 300) {
						return this.setState(() => ({
							errors: '** Sorry that wont work. Try an area near you! **'
						}));
					}
				}
			})
			.then(res => {
				if (res.businesses.length > 0) {
					console.log(res.businesses);
					this.setState(() => ({
						results: res.businesses,
						isLoading: false,
						hasResults: true,
						searchVal: '',
						errors: ''
					}));
				} else if (!res.businesses.length) {
					this.setState(() => ({
						errors: '** Sorry no results for that area **'
					}));
				}
			})
			.catch(err => console.log(err));
	};

	handleClearSearch = () => {
		this.setState(() => ({ results: [], hasResults: false }));
	};

	scrollToBottom = () => {
		this.findResults.scrollIntoView({ behavior: 'smooth' });
	};

	stopAutoScroll = () => {
		this.setState({ hasResults: false });
	};

	componentDidUpdate() {
		if (this.state.hasResults) {
			if (this.findResults) {
				this.scrollToBottom();
			}
		}
	}

	render() {
		const styles = {
			height: '100%',
			position: 'relative',
			button: {
				width: '18rem',
				height: '3.5rem',
				background: 'var(--primary-color)',
				color: 'white',
				margin: '2rem auto'
			},
			spinner: {
				width: '10rem',
				height: '10rem',
				background: 'transparent',
				position: 'absolute',
				left: '50%',
				bottom: '3rem',
				transform: 'translate(-50%, 0%)',

				display: this.state.isLoading ? 'flex' : 'none',
				justifyContent: 'center',
				alignItems: 'center'
			},
			background: {
				// backgroundImage: `linear-gradient(to right, rgba(232, 232, 232, .6), rgba(216, 82, 82, .6))`
			},
			backToTop: {
				padding: '2rem',
				color: 'var(--primary-color)'
			},
			btnWrapper: {
				marginTop: '2rem',
				textAlign: 'center'
			}
		};
		return (
			<div style={styles.background} id="search" className="search">
				<div className="search__container">
					<div className="search__header">
						<Typography headingPrimary="Welcome To NightLife" classname="search__heading" />
					</div>
					<div className="search__body">
						<SearchCard
							handleOnChange={this.handleOnChange}
							handleOnSubmit={this.handleOnSubmit}
							errors={this.state.errors}
						/>
					</div>
				</div>

				<div className="results">
					<div className="results__container">
						<div ref={node => (this.findResults = node)} />
						<div style={styles.spinner}>{this.state.isLoading && <Loader />}</div>
						{this.state.results.length > 0 && (
							<Button
								addStyles={styles.button}
								type="button"
								name="Clear Results"
								onClick={this.handleClearSearch}
							/>
						)}

						<ul>
							{this.state.results.length ? (
								this.state.results.map(data => {
									return (
										<SearchResults
											key={data.id}
											name={data.name}
											location={data.location.address1}
											rating={data.rating}
											moreInfoLink={data.url}
											image={data.image_url}
											imageAlt="bar images"
											isLoggedIn={this.props.user.isLoggedIn}
											history={this.props.history}
										/>
									);
								})
							) : null}
						</ul>

						{/* <div className="search__yelp-tag-wrapper">
							<h1 className="search__yelp-tag">Powered By Yelp</h1>
						</div> */}

						{this.state.results.length > 0 && (
							<div style={styles.btnWrapper}>
								<a href="#search" onClick={this.stopAutoScroll} style={styles.backToTop}>
									back to top
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(Search);
