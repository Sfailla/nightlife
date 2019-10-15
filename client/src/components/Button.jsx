import React from 'react';

// button types are: button, submit, reset
const Button = ({
	addStyles,
	name,
	onClick,
	btnType,
	disabled,
	className,
	icon
}) => {
	return (
		<button
			className={className}
			disabled={disabled}
			type={btnType}
			onClick={onClick}
			style={{ ...addStyles }}
		>
			{icon ? icon : null}
			{name}
		</button>
	);
};

export default Button;
