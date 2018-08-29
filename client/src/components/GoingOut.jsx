import React, { Fragment } from 'react';

import Typography from './Typography';

const GoingOut = props => (
	<Fragment>
		<Typography headingTertiary="User Information" />
		<hr />
		<Typography
			addStyles={{
				width: '15.4rem',
				textAlign: 'right',
				marginTop: '2rem'
			}}
			headingTertiary="Email:"
		/>
		<Typography
			addStyles={{ width: '15.4rem', textAlign: 'right' }}
			headingTertiary="Company:"
		/>
		<Typography
			addStyles={{ width: '15.4rem', textAlign: 'right' }}
			headingTertiary="Location:"
		/>
		<Typography headingTertiary="Description:" />
	</Fragment>
);

export default GoingOut;
