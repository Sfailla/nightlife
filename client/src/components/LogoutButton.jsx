import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = props => {
	const styles = {
		button: {
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			alignItems: 'center',
			width: '100%',
			height: '3rem',
			fontSize: '1.4rem',
			fontWeight: 'bold',
			border: '1px solid gold',
			color: 'gold',
			background: 'var(--primary-color)'
		}
	};
	return (
		<button
			className="options__link-logout"
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
