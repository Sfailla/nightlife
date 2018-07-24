import React from 'react';

// button types are: button, submit, reset
const Button = ({ classname, name, onClick, btnType }) => (
	<button type={btnType} onClick={onClick} className={`button ${classname}`}>
		{name}
	</button>
);

export default Button;
