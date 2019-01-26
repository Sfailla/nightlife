import React from 'react';

const styles = {
	header: {
		width: '100%',
		height: '6rem',
		fontSize: '2rem',
		color: 'white',
		padding: '0 1rem 0 1rem',
		backgroundColor: 'var(--primary-color)',
		boxShadow: '.5rem .5rem 1.2rem .3rem rgba(0, 0, 0, .6)'
	},
	headerElements: {
		height: '6rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
};

const Header = () => (
	<div style={styles.header}>
		<div id="app-header" className="container" style={styles.headerElements}>
			<p>Steve Failla</p>
			<p>FCC Nightlife App</p>
		</div>
	</div>
);

export default Header;
