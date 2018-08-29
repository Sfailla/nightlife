import React from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions/users';

import api from '../api/yelpAPI.json';
import SearchCard from '../components/SearchCard';
import SearchResults from '../components/SearchResults';
import Typography from '../components/Typography';
import Button from '../components/Button';

const styles = {
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

	handleFetchData = () => {
		this.setState(() => ({ isLoading: true }));
		fetch(
			`${api.yelp.baseURL}location=${this.state
				.searchVal}&limit=10&term=bars`,
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
			});
	};

	handleClearSearch = () => {
		this.setState(() => ({ results: [] }));
	};

	render() {
		return (
			<div className="search">
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
					{this.state.isLoading && <h3>Loading...</h3>}
					<ul>
						{this.state.results.length ? (
							this.state.results.map(data => {
								return (
									<SearchResults
										key={data.id}
										name={data.name}
										location={data.location.address1}
										imageSrc={data.image_url}
										imageAlt="bar images"
										isLoggedIn={this.props.user.isLoggedIn}
									/>
								);
							})
						) : null}
					</ul>

					{this.state.results.length > 0 && (
						<a
							href="#app-header"
							style={{ display: 'block' }}
							className="u-center-text"
						>
							back to top
						</a>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.users
});

export default connect(mapStateToProps)(Search);
