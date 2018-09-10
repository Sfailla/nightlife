import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const styles = {
	spinner: {
		width: '5rem',
		height: '5rem',
		background: 'white',
		border: '2px solid black',
		borderRadius: '50%',
		boxShadow: 'var(--box-shadow-sm-l)',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: '75%',
		height: '75%'
	}
};

const Loader = () => {
	return (
		<Fragment>
			<div className="spinner" style={styles.spinner}>
				<img
					style={styles.logo}
					src="https://image.flaticon.com/icons/svg/23/23630.svg"
					alt="..."
				/>
			</div>
		</Fragment>
	);
};

Loader.propTypes = {};

export default Loader;
