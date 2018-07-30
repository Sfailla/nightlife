import React from 'react';

const styles = {
	display: 'inline-block',
	width: '15rem',
	height: '3rem'
};

// button types are: button, submit, reset
const Button = ({ addStyles, name, onClick, btnType }) => (
	<button type={btnType} onClick={onClick} style={{ ...styles, addStyles }}>
		{name}
	</button>
);

export default Button;
