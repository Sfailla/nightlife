import React, { Component } from 'react';

import api from '../api/yelpAPI.json';

import Form from '../components/Form';
import SearchResults from '../components/SearchRes';
import Topography from '../components/Topography';

export default class Search extends Component {
	state = {
		searchVal: [],
		results: [],
		errors: [],
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
		this.setState(() => ({ searchVal: value }));
	};

	getToken = () => {
		return api.yelp.token;
	};

	handleFetchData = () => {
		this.setState(() => ({ isLoading: true }));
		fetch(`${api.yelp.baseURL}location=${this.state.searchVal}&limit=10&term=bars`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${this.getToken()}`
			}
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.businesses.length > 0) {
					this.setState(() => ({
						results: res.businesses,
						isLoading: false,
						searchVal: '',
						errors: ''
					}));
				} else if (!res.businesses.length) {
					this.setState(() => ({ errors: '** Sorry no results for that area **' }));
				}
			});
	};

	componentDidMount = () => {};

	render() {
		return (
			<div className="search">
				<Topography
					headingPrimary={true}
					primaryMessage="See whose going out tonight!"
					clsname="search__heading u-center-text u-mt-25"
				/>
				<div className="search__search-card">
					<div className="search__search-container">
						<Topography
							headingSecondary={true}
							secondaryMessage="Search any area for bars and clubs!"
							clsname="search__heading-secondary u-center-text"
						/>
						<Topography
							headingTertiary={true}
							tertiaryMessage="Please enter City and State, or Zip"
							clsname="search__heading-secondary--sub u-center-text u-mb-25"
						/>
						<form onSubmit={this.handleOnSubmit}>
							<Form
								className="search__search-form"
								id_name="search"
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
										img_src={data.image_url}
										img_alt="bar images"
									/>
								);
							})
						) : null}
					</ul>

					{this.state.results.length > 0 ? (
						<a href="#app-header" style={{ display: 'block' }} className="u-center-text">
							back to top
						</a>
					) : null}
				</div>
			</div>
		);
	}
}