import React from 'react';

const RadioGroup = ({
	type,
	id,
	name,
	handleChecked,
	handleOnChange,
	labelName
}) => (
	<div>
		<div className="account__form-group">
			<input
				type={type}
				id={id}
				checked={handleChecked}
				onChange={handleOnChange}
				value={id}
				name={name}
			/>

			<label htmlFor={id}>{labelName}</label>
		</div>
	</div>
);

export default RadioGroup;
