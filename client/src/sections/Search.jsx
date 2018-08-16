import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions/users';

import api from '../api/yelpAPI.json';
import { Form } from '../components/Form';
import SearchResults from '../components/SearchResults';
import Topography from '../components/Topography';

class Search extends Component {
	state = {
		searchVal: '',
		results: [],
		errors: '',
		isLoading: false
	};

	handleOnSubmit = (evt) => {
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

	handleOnChange = (evt) => {
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
			.then((res) => {
				if (res.status >= 200 && res.status <= 300) {
					console.log(res);
					return res.json();
				} else {
					if (res.status > 300) {
						console.log(res);
						return this.setState(() => ({
							errors:
								'** Sorry that wont work. Try an area near you! **'
						}));
					}
				}
			})
			.then((res) => {
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

	componentDidMount = () => {};

	render() {
		return (
			<div className="search">
				<Topography
					headingPrimary="See whose going out tonight!"
					classname="search__heading u-center-text u-mt-25"
				/>
				<div className="search__search-card">
					<div className="search__search-container">
						<Topography
							headingSecondary="Search any area for bars and clubs!"
							classname="search__heading-secondary u-center-text"
						/>
						<Topography
							headingTertiary="Please enter City, State, and/or Zip"
							classname="search__heading-secondary--sub u-center-text u-mb-25"
						/>
						<form onSubmit={this.handleOnSubmit}>
							<Form
								className="search__search-form"
								name="search"
								type="text"
								label="Enter location"
								autocomplete={false}
								handleOnChange={this.handleOnChange}
							/>

							{this.state.errors && <p>{this.state.errors}</p>}
						</form>
					</div>
				</div>
				<br />

				<div className="results">
					{this.state.isLoading && <h3>Loading...</h3>}
					<ul>
						{this.state.results.length ? (
							this.state.results.map((data) => {
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

					{this.state.results.length > 0 ? (
						<a
							href="#app-header"
							style={{ display: 'block' }}
							className="u-center-text"
						>
							back to top
						</a>
					) : null}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.users
});

export default connect(mapStateToProps)(Search);
