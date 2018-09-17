import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon } from './Icon';
import LogoutButton from './LogoutButton';
import Button from './Button';

const NavBoxOptions = props => {
	const styles = {
		button: {
			width: '12rem',
			height: '12rem',
			color: 'white',
			outline: 'none',
			border: 'none',
			fontSize: 'inherit',
			fontFamily: 'inherit',
			fontWeight: 'inherit',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'var(--primary-color)',
			boxShadow: 'var(--box-shadow-md-d)'
		},
		link: {
			textDecoration: 'none',
		},
		icon: {
			fill: 'var(--secondary-color)',
			fontSize: '3rem',
			marginBottom: '1rem',
		},
		wrapper: {
			position: 'relative',
			display: 'flex',
			color: 'white'
		},
		events: {
			position: 'absolute',
			bottom: '0',
			left: '50%',
			transform: 'translateX(-50% )',
			paddingBottom: '8px',
		}
	};

	const icon = <Icon addStyles={styles.icon} view={25} size={25} icon="logout" />;

	return (
		<Fragment>
			<div className="options__box-container">
				<Link to="/" style={styles.link}>
					<div className="options__box" style={styles.wrapper}>
						<Icon size={25} view={25} addStyles={styles.icon} icon="search" />
						<p>SEARCH</p>
					</div>
				</Link>
				<Link to="/account" style={styles.link}>
					<div className="options__box" style={styles.wrapper}>
						<Icon size={25} view={25} addStyles={styles.icon} icon="settings" />
						<p>SETTINGS</p>
					</div>
				</Link>
				<div style={styles.wrapper}>
					<LogoutButton
						name="SIGN OUT"
						icon={icon}
						logout={props.logout}
						addStyles={styles.button}
					/>
				</div>
				{/* <div style={styles.wrapper}>
					<Button
						name="Remove"
						icon={<Icon size={25} view={25} icon="trash" addStyles={styles.icon} />}
						addStyles={styles.button}
					/>
					<p style={styles.events}>EVENTS</p>
				</div> */}
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
