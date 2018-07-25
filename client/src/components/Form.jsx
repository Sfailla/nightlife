import React from 'react';

export const BorderlessForm = ({ handleOnChange, autocomplete, inputButton, btnName, name, type, label }) => (
	<div>
		<div className="form-group borderless-form">
			<input
				id={name}
				type={type}
				name={name}
				placeholder={label}
				autoComplete={autocomplete ? 'on' : 'off'}
				className="borderless"
				onChange={handleOnChange}
			/>

			<label className="borderless" htmlFor={name}>
				{label}
			</label>
		</div>

		{inputButton ? <input type="submit" role="button" value={btnName} /> : null}
	</div>
);

const Form = ({ handleOnChange, autocomplete, inputButton, btnName, label, type, id }) => (
	<div>
		<div className="form-group form">
			<input
				id={id}
				name={id}
				type={type}
				className="form"
				autoComplete={autocomplete ? 'on' : 'off'}
				placeholder={label}
				onChange={handleOnChange}
			/>

			<label className="form" htmlFor={id}>
				{label}
			</label>
		</div>

		{inputButton ? <input type="submit" role="button" value={btnName} /> : null}
	</div>
);

export default Form;
