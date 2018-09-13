import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = props => {
	const styles = {
		button: {
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			alignItems: 'center',
			width: '10rem',
			height: '3rem',
			fontSize: '1.4rem',
			fontWeight: 'bold',
			border: '1px solid var(--color-gold)',
			color: 'var(--color-gold)',
			background: 'var(--primary-color)'
		},
		icon: {
			fill: 'var(--color-gold)',
			marginBottom: '1rem',
		}
	};
	return (
		<button
			type="submit"
			style={{ ...styles.button, ...props.addStyles }}
			onClick={props.logout}
		>
			{props.icon}
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
