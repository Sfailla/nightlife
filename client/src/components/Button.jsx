import React from 'react';

const defaultButtonStyles = {
	display: 'block',
	width: '15rem',
	height: '3rem'
};
// button types are: button, submit, reset
const Button = ({ addStyles, name, onClick, btnType }) => {
	return (
		<button
			type={btnType}
			onClick={onClick}
			style={{ ...defaultButtonStyles, ...addStyles }}
		>
			{name}
		</button>
	);
};

export default Button;
