import React from 'react';

import { Form } from './Form';
import Typography from './Typography';

class SearchCard extends React.Component {
	state = {
		searchVal: '',
		errors: this.props.errors
	};

	handleOnChange = evt => {
		const { value } = evt.target;
		this.setState(() => ({ searchVal: value, errors: '' }));
	};

	handleOnSubmit = evt => {
		evt.preventDefault();

		if (this.state.searchVal.length) {
			evt.target.elements[0].value = '';
			this.props.getSearchValue(this.state.searchVal);
			this.props.handleFetchData(this.state.searchVal);
			this.setState(() => ({ errors: '' }));
		} else {
			this.setState(() => ({
				errors: '** you must enter a location to search **'
			}));
		}
	};

	render() {
		return (
			<div className="search__search-card">
				<div className="search__search-container">
					<Typography
						headingSecondary="See what's going on tonight!"
						classname="search__heading-secondary u-center-text"
					/>
					<Typography
						headingTertiary="Please enter City, State, and/or Zip"
						classname="search__heading-secondary--sub u-center-text"
					/>
					<form onSubmit={this.handleOnSubmit}>
						<Form
							name="search"
							type="text"
							label="Enter location"
							value={this.state.searchVal}
							autocomplete={false}
							handleOnChange={this.handleOnChange}
						/>
						{this.state.errors && <p className="search__error">{this.state.errors}</p>}
					</form>
				</div>
			</div>
		);
	}
}

export default SearchCard;
