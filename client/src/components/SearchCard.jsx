import React from 'react';

import { Form } from './Form';
import Typography from './Typography';

const SearchCard = ({ handleOnChange, handleOnSubmit, errors }) => {
	return (
		<div className="search__search-card">
			<div className="search__search-container">
				<Typography
					headingSecondary="Search any area for bars and clubs!"
					classname="search__heading-secondary u-center-text"
				/>
				<Typography
					headingTertiary="Please enter City, State, and/or Zip"
					classname="search__heading-secondary--sub u-center-text u-mb-25"
				/>
				<form onSubmit={handleOnSubmit}>
					<Form
						className="search__search-form"
						name="search"
						type="text"
						label="Enter location"
						autocomplete={false}
						handleOnChange={handleOnChange}
					/>
					{errors && <p>{errors}</p>}
				</form>
			</div>
		</div>
	);
};

export default SearchCard;
