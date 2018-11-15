import React, { Fragment } from 'react';

const styles = {
	ul: {
		paddingBottom: '3rem'
	},
	li: {
		listStyle: 'none',
		marginTop: '2rem'
	},
	p: {
		width: '100%',
		paddingLeft: '1rem',
		color: 'var(--primary-text-color)'
	},
	wordWrap: {
		display: 'flex'
	},
	wordBox: {
		width: '20rem',
		height: '3rem',
		background: 'var(--primary-color)',
		color: 'var(--color-gold)',
		letterSpacing: '2px',
		textTransform: 'uppercase',
		paddingRight: '1rem',
		boxShadow: 'var(--box-shadow-md-d)',

		display: 'flex',
		justifyContent: 'right',
		alignItems: 'center'
	},
	textArea: {
		width: '100%',
		height: '8rem',
		overflowY: 'auto'
	}
};

const UserDetailsList = props => {
	return (
		<Fragment>
			<ul style={styles.ul}>
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
						<div style={styles.wordBox}>About:</div>
						<div style={styles.textArea}>
							<p style={styles.p}>{props.description || 'NONE'}</p>
						</div>
					</div>
				</li>
			</ul>
		</Fragment>
	);
};

export default UserDetailsList;
