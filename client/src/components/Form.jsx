import React, { Fragment } from 'react';

export const BorderlessForm = ({ handleOnChange, autocomplete, inputButton, btnName, name, type, label }) => (
	<Fragment>
		<div className="form-group borderless-form">
			<input
				type={type}
				name={name}
				placeholder={label}
				autoComplete={autocomplete ? 'on' : 'off'}
				onChange={handleOnChange}
			/>

			<label className="borderless" htmlFor={name}>
				{label}
			</label>
		</div>

		{inputButton ? <input type="submit" role="button" value={btnName} /> : null}
	</Fragment>
);

const Form = ({ handleOnChange, autocomplete, inputButton, btnName, label, type, name }) => (
	<Fragment>
		<div className="form-group form">
			<input
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

		{inputButton ? <input type="submit" role="button" value={btnName} /> : null}
	</Fragment>
);

export default Form;
