import React from 'react';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';

const styles = {
	background: 'var(--primary-color)',
	color: 'white',
	marginTop: '1.5rem',
	fontSize: '1.4rem',
	fontFamily: 'Roboto'
};

const SelectAvatar = (props) => (
	<form onSubmit={props.handleOnSubmit} className="account__avatar-wrapper">
		<div className="account__avatar">
			<img src={props.handleSelectAvatar()} alt="no-avatar" />
			<Button type="submit" name="Save Avatar" addStyles={styles} />
		</div>
		<div className="account__checkboxes">
			<RadioGroup
				labelName="male-avatar"
				type="radio"
				id="male-avatar"
				handleChecked={props.avatarSelect === 'male-avatar'}
				handleOnChange={props.handleOnChange}
				name="avatarSelect"
			/>

			<RadioGroup
				labelName="female-avatar"
				type="radio"
				id="female-avatar"
				handleChecked={props.avatarSelect === 'female-avatar'}
				handleOnChange={props.handleOnChange}
				name="avatarSelect"
			/>

			<RadioGroup
				labelName="default-avatar"
				type="radio"
				id="default-avatar"
				handleChecked={props.avatarSelect === 'default-avatar'}
				handleOnChange={props.handleOnChange}
				name="avatarSelect"
			/>
		</div>
	</form>
);

export default SelectAvatar;
