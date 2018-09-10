import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LogoutButton from './LogoutButton';
import Button from './Button';

const NavBoxOptions = props => {
	const styles = {
		button: {
			width: '12rem',
			height: '12rem',
			color: 'var(--color-gold)',
			outline: 'none',
			border: 'none',
			fontSize: 'inherit',
			fontFamily: 'inherit',
			fontWeight: 'inherit',
			background: 'var(--primary-color)',
			// borderBottom: '3px solid var(--color-gold)',
			boxShadow: 'var(--box-shadow-md-d)'
		},
		a: {
			textDecoration: 'none',
			color: 'blue'
		}
	};
	return (
		<Fragment>
			<div className="options__box-container">
				<Link to="/" style={styles.a}>
					<div className="options__box">SEARCH</div>
				</Link>
				<Link to="/account" style={styles.a}>
					<div className="options__box">SETTINGS</div>
				</Link>
				<LogoutButton
					name="SIGN OUT"
					logout={props.logout}
					addStyles={styles.button}
				/>
				<Button addStyles={styles.button} name="Remove Events" />
			</div>
		</Fragment>
	);
};

NavBoxOptions.propTypes = {
	logout: PropTypes.func,
	addStyles: PropTypes.object,
	name: PropTypes.string
};

export default NavBoxOptions;
