import React from 'react';
import { connect } from 'react-redux';

import api from '../api/yelpAPI.json';
import SearchCard from '../components/SearchCard';
import SearchResults from '../components/SearchResults';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Loader from '../components/Loader';
import authorize from '../utils/AuthClass';

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

	handleFetchData = searchVal => {
		const controller = new AbortController();
		const { signal } = controller;
		this.setState(() => ({ isLoading: true }));
		fetch(
			`${api.yelp
				.baseURL}location=${searchVal}&limit=15&term=nightclubs,bars`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${this.getToken()}`
				},
				signal
			}
		)
			.then(res => authorize._checkStatus(res))
			.then(res => {
				if (res.businesses.length) {
					this.setState(() => ({
						results: res.businesses,
						isLoading: false,
						hasResults: true,
						searchVal: '',
						errors: ''
					}));
				} else if (!res.businesses.length) {
					this.setState(() => ({
						errors: '** Sorry no results for that area **',
						isLoading: false
					}));
					controller.abort();
				}
			})
			.catch(err => {
				this.setState(() => ({
					errors: `** Sorry ${err.statusText} **`,
					isLoading: false
				}));
			});
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

					<div className="search__background">
						<Typography
							headingSecondary="See what's going on tonight!"
							classname="search__heading-secondary u-center-text"
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

								<ul>
									{this.state.results.length ? (
										<div>
											<Typography
												headingPrimary={`search results (${this.state
													.results.length})`}
												addStyles={styles.resultsTitle}
											/>

											<Button
												addStyles={styles.button}
												type="button"
												name="Clear Results"
												onClick={this.handleClearSearch}
											/>

											<SearchResults
												results={this.state.results}
												isLoggedIn={this.props.user.isLoggedIn}
												history={this.props.history}
											/>

											<div style={styles.btnWrapper}>
												<a
													href="#search"
													onClick={this.stopAutoScroll}
													style={styles.backToTop}
												>
													back to top
												</a>
											</div>
										</div>
									) : null}
								</ul>
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
