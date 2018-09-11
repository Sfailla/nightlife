import React from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions/users';
import { Link } from 'react-router-dom';

import { Icon25 } from '../components/Icon';
import api from '../api/yelpAPI.json';
import SearchCard from '../components/SearchCard';
import SearchResults from '../components/SearchResults';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Loader from '../components/Loader';

const styles = {
	position: 'relative',
	button: {
		width: '18rem',
		height: '3.5rem',
		background: 'var(--primary-color)',
		color: 'white',
		margin: '2rem auto'
	}
};

class Search extends React.Component {
	state = {
		searchVal: '',
		results: [],
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
		this.setState(() => ({ events: [...this.state.events, event] }));
	};

	handleFetchData = () => {
		this.setState(() => ({ isLoading: true }));
		fetch(
			`${api.yelp.baseURL}location=${this.state
				.searchVal}&limit=10&term=nightclubs, bars`,
			{
				method: 'get',
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
					console.log(res.businesses)
					this.setState(() => ({
						results: res.businesses,
						isLoading: false,
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
		this.setState(() => ({ results: [] }));
	};

	render() {
		return (
			<div style={styles} className="search">
				<Typography
					headingPrimary="See whose going out tonight!"
					classname="search__heading u-center-text u-mt-25"
				/>
				<SearchCard
					handleOnChange={this.handleOnChange}
					handleOnSubmit={this.handleOnSubmit}
					errors={this.state.errors}
				/>

				<br />

				{this.state.results.length > 0 && (
					<Button
						addStyles={styles.button}
						type="button"
						name="Clear Search Results"
						onClick={this.handleClearSearch}
					/>
				)}

				<div className="results">
					<div className="results__container">

						{this.state.isLoading && <Loader />}
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
											imageSrc={data.image_url}
											imageAlt="bar images"
											isLoggedIn={this.props.user.isLoggedIn}
											history={this.props.history}
										/>
									);
								})
							) : null}
						</ul>

						{this.state.results.length > 0 && (
							<Link
								to="#app-header"
								style={{ display: 'block' }}
								className="u-center-text"
							>
								back to top
						</Link>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.users
});

export default connect(mapStateToProps)(Search);
