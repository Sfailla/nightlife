import React from 'react';

const styles = {
	display: 'flex',
	alignItems: 'center',
	order: '1'
};

const CheckGroup = ({ name, checked, labelName, handleCBChange }) => (
	<div style={styles}>
		<input
			id={name}
			name={name}
			type="checkbox"
			checked={checked}
			onChange={handleCBChange}
		/>
		<label htmlFor={name}>{labelName}</label>
	</div>
);

export default CheckGroup;
