import React from 'react';
import { BorderlessForm } from './Form';
import Button from './Button';

const styles = {
	button: {
		width: '15rem',
		height: '4rem',
		background: 'var(--primary-color)',
		color: 'white',
		letterSpacing: '2px',
		fontWeight: 'bold',
		margin: '2rem auto'
	}
};

const AccountBioForm = props => {
	return (
		<div className="account__bio-info">
			<div className="account__form">
				<form onSubmit={props.handleOnSubmit}>
					<BorderlessForm
						type="text"
						value={props.company || ''}
						name="company"
						label="Add-Company"
						handleOnChange={props.handleOnChange}
					/>

					<BorderlessForm
						type="email"
						value={props.email || ''}
						name="email"
						label="Add-Email"
						handleOnChange={props.handleOnChange}
					/>

					<BorderlessForm
						type="text"
						value={props.location || ''}
						name="location"
						label="Add-Location"
						handleOnChange={props.handleOnChange}
					/>

					<textarea
						className="account__textarea u-mt-25"
						value={props.description || ''}
						name="description"
						rows={5}
						style={{
							color: 'var(--primary-text-color)',
							fontWeight: '500',
							fontFamily: 'inherit'
						}}
						placeholder="Add-Biography"
						onChange={props.handleOnChange}
					/>

					<Button
						addStyles={styles.button}
						type="submit"
						name="Save Info"
					/>
				</form>
			</div>
		</div>
	);
};

export default AccountBioForm;
