import React from 'react';
import { connect } from 'react-redux';

import Typography from '../components/Typography';
import AvatarComponent from '../components/AvatarComponent';
import AccountBioForm from '../components/AccountBioForm';
import Button from '../components/Button';

const styles = {
	button: {
		width: '15rem',
		height: '4rem',
		background: 'var(--primary-color)',
		color: 'white',
		fontWeight: 'bold',
		margin: '2rem auto'
	}
};

class Account extends React.Component {
	state = {
		company: '',
		email: '',
		location: '',
		Biography: ''
	};

	handleOnSubmit = event => {
		event.preventDefault();
	};

	handleOnChange = event => {
		const { name, value } = event.target;
		console.log({ [name]: value });
		this.setState(() => ({ [name]: value }));
	};

	componentDidMount = () => {};

	render() {
		return (
			<div className="account">
				<div style={{ display: 'flex' }}>
					<Typography
						classname="account__title"
						headingPrimary="Account"
					/>
					<Typography
						classname="account__sub-title"
						headingSecondary="create a profile"
					/>
				</div>
				<div className="account__profile-card">
					<Typography
						classname="account__card-title"
						headingTertiary="Change Avatar"
					/>
					<hr />
					<AvatarComponent />
					<hr />
					<Typography
						classname="account__card-title"
						headingTertiary="Add Biography"
					/>
					<hr />
					<AccountBioForm
						handleOnChange={this.handleOnChange}
						handleOnSubmit={this.handleOnSubmit}
					/>

					<Button
						addStyles={styles.button}
						type="button"
						name="Save Bio"
						onClick={this.handleSaveBio}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(Account);
