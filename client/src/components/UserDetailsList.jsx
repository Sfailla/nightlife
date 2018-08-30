import React, { Fragment } from 'react';

const styles = {
	ul: {},
	li: {
		listStyle: 'none',
		marginTop: '2rem'
	},
	p: {
		background: 'lightpink',
		width: '100%',
		height: '3rem',
		paddingLeft: '1rem',
		marginLeft: '2rem',
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'center'
	},
	wordWrap: {
		display: 'flex'
	},
	wordBox: {
		width: '15rem',
		height: '3rem',
		background: 'var(--primary-color)',
		color: 'white',
		textTransform: 'uppercase',
		paddingRight: '1rem',

		display: 'flex',
		justifyContent: 'right',
		alignItems: 'center'
	}
};

const UserDetailsList = props => {
	return (
		<Fragment>
			<ul>
				<li style={styles.li}>
					<div style={styles.wordWrap}>
						<div style={styles.wordBox}>Company:</div>
						<p style={styles.p}>{props.company || 'NONE'}</p>
					</div>
				</li>
				<li style={styles.li}>
					<div style={styles.wordWrap}>
						<div style={styles.wordBox}>Location:</div>
						<p style={styles.p}>{props.location || 'NONE'}</p>
					</div>
				</li>
				<li style={styles.li}>
					<div style={styles.wordWrap}>
						<div style={styles.wordBox}>Email:</div>
						<p style={styles.p}>{props.email || 'NONE'}</p>
					</div>
				</li>
				<li style={styles.li}>
					<div style={styles.wordWrap}>
						<div style={styles.wordBox}>Description:</div>
						<p style={styles.p}>{props.description || 'NONE'}</p>
					</div>
				</li>
			</ul>
		</Fragment>
	);
};

export default UserDetailsList;
