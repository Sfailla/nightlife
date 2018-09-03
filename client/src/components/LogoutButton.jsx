import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const LogoutButton = props => {
	const styles = {
		button: {
			display: 'inline-block',
			width: '10rem',
			height: '3rem',
			fontWeight: 'bold',
			color: 'white',
			background: 'var(--primary-color)'
		}
	};
	return (
		<button
			type="submit"
			style={{ ...styles.button, ...props.addStyles }}
			onClick={props.logout}
		>
			{props.name}
		</button>
	);
};

LogoutButton.propTypes = {
	addStyles: PropTypes.object,
	logout: PropTypes.func,
	name: PropTypes.string
};

export default LogoutButton;
