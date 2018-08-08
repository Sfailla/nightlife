import React from 'react';
import { BorderlessForm } from '../components/Form';

const AccountBioForm = (props) => {
	return (
		<div className="account__bio-info">
			<div className="account__form">
				<form onSubmit={props.handleOnSubmit}>
					<BorderlessForm
						type="text"
						name="avatar"
						label="Add-Avatar-url"
						handleOnChange={props.handleOnChange}
					/>

					<BorderlessForm
						id={'1234'}
						type="email"
						name="email"
						label="Add-Email"
						handleOnChange={props.handleOnChange}
					/>

					<BorderlessForm
						type="text"
						name="location"
						label="Add-Location"
						handleOnChange={props.handleOnChange}
					/>

					<textarea
						className="u-mt-25"
						name="description"
						rows={5}
						placeholder="Add-Description"
						onChange={props.handleOnChange}
					/>
				</form>
			</div>
		</div>
	);
};

export default AccountBioForm;
