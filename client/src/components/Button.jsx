import React from 'react';


// button types are: button, submit, reset
const Button = ({ addStyles, name, onClick, btnType, disabled }) => {
	const defaultButtonStyles = {
		display: 'block',
		width: 'auto',
		height: '3rem',
		opacity: disabled ? '.3' : 'none',
	};
	return (
		<button
			disabled={disabled || false}
			type={btnType}
			onClick={onClick}
			style={{ ...defaultButtonStyles, ...addStyles }}
		>
			{name}
		</button>
	);
};

export default Button;
