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
		hasResults: false,
		isLoading: false,
		results: [],
		events: [],
		errors: ''
	};

	getToken = () => {
		return api.yelp.token;
	};

	addEvent = event => {
		this.setState(() => ({
			events: [ ...this.state.events, event ]
		}));
	};

	handleFetchData = searchVal => {
		this.setState(() => ({ isLoading: true, searchVal }));
		fetch(
			`${api.yelp
				.baseURL}location=${searchVal}&limit=15&term=nightclubs,bars`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${this.getToken()}`
				}
			}
		)
			.then(res => {
				if (res.status >= 200 && res.status <= 300) {
					return res.json();
				} else {
					if (res.status > 300) {
						return this.setState(() => ({
							errors:
								'** Sorry that wont work. Try an area near you! **'
						}));
					}
				}
			})
			.then(res => {
				if (res.businesses.length > 0) {
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
				margin: '5rem auto'
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
			resultsTitle: {
				textAlign: 'center',
				fontSize: '4rem',
				marginTop: '5rem'
			},
			backToTop: {
				padding: '2rem',
				color: 'var(--secondary-color)'
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
						<Typography
							headingPrimary="Welcome To NightLife"
							classname="search__heading"
						/>
					</div>
					<div className="search__body">
						<SearchCard
							handleOnChange={this.handleOnChange}
							handleOnSubmit={this.handleOnSubmit}
							handleFetchData={this.handleFetchData}
							errors={this.state.errors}
						/>

						<div className="results">
							<div className="results__container">
								<div ref={node => (this.findResults = node)} />
								<div style={styles.spinner}>
									{this.state.isLoading && <Loader />}
								</div>
								{this.state.results.length > 0 && (
									<h1
										className="heading-primary"
										style={styles.resultsTitle}
									>
										search results ({this.state.results.length})
									</h1>
								)}

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

								{this.state.results.length > 0 && (
									<div style={styles.btnWrapper}>
										<a
											href="#search"
											onClick={this.stopAutoScroll}
											style={styles.backToTop}
										>
											back to top
										</a>
									</div>
								)}
							</div>
						</div>
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
