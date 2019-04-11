import React from 'react';
import Typography from './Typography';

const Biography = ({ heading, content, large }) => {
	return (
		<li className={large ? 'user-info__li--large' : 'user-info__li'}>
			<div className="user-info__bio-heading">
				<Typography headingTertiary={`${heading}`} />
				{content ? (
					<p className="user-info__bio-heading--sub-heading">{content}</p>
				) : (
					'no company listed'
				)}
			</div>
		</li>
	);
};

export default Biography;
