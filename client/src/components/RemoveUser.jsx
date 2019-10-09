import React from 'react';
import { connect } from 'react-redux';

import Typography from './Typography';
import Avatar from './Avatar';
import Button from './Button';

const RemoveAccount = props => {
	console.log(props.avatar);
	const styles = {
		button: {
			height: '4rem',
			padding: '3px',
			backgroundColor: 'red',
			color: 'white'
		}
	};
	return (
		<div className="remove-user">
			<div className="remove-user__title">
				<Typography headingSecondary="Remove Account" />
			</div>
			<div className="remove-user__card">
				<Typography headingTertiary="delete user account" />
				<hr />
				<div className="remove-user__content">
					<div className="remove-user__avatar">
						<Avatar size={10} avatar={props.avatar} />
					</div>
					<Button
						addStyles={styles.button}
						name="DELETE USER"
						btnType="button"
					/>
				</div>
			</div>
			<div className="remove-user__spacer" />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		avatar: state.users.avatar
	};
};

export default connect(mapStateToProps, null)(RemoveAccount);
