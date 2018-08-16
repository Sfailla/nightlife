import React, { Fragment } from 'react';

export const BorderlessForm = ({
	addStyles,
	handleOnChange,
	autocomplete,
	name,
	type,
	label
}) => (
	<Fragment>
		<div className="form-group borderless-form">
			<input
				style={{ ...addStyles }}
				type={type}
				id={name}
				name={name}
				placeholder={label}
				autoComplete={autocomplete ? 'on' : 'off'}
				onChange={handleOnChange}
			/>
			<label className="borderless" htmlFor={name}>
				{label}
			</label>
		</div>
	</Fragment>
);

export const Form = ({
	handleOnChange,
	addStyles,
	autocomplete,
	label,
	type,
	name
}) => (
	<Fragment>
		<div className="form-group form">
			<input
				className="search-input"
				style={{ ...addStyles }}
				id={name}
				name={name}
				type={type}
				autoComplete={autocomplete ? 'on' : 'off'}
				placeholder={label}
				onChange={handleOnChange}
			/>
			<label className="form" htmlFor={name}>
				{label}
			</label>
		</div>
	</Fragment>
);
