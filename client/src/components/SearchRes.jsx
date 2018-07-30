import React from 'react';

import Button from './Button';
import { truncateRes } from '../utils/functions';

const SearchResComponent = ({ img_src, img_alt, name, location }) => (
	<div className="results__container">
		<div className="results__card">
			<div className="results__card--left">
				<img src={img_src} alt={img_alt} />
			</div>
			<div className="results__card--right">
				<div className="results__inner-container">
					<h2 className="heading-secondary">{truncateRes(name)}</h2>
					<p>{location}</p>
					<div className="results__buttons u-mt-25">
						<Button className="results__button--favorites" name="Add to Favorites" />
						<Button className="results__button--going" name="going here" />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default SearchResComponent;
