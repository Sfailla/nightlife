import React from 'react';

const Topography = ({ headingPrimary, headingSecondary, headingTertiary, classname, addedStyles }) => {
	if (headingPrimary) {
		return (
			<p style={{ ...addedStyles }} className={`heading-primary ${classname}`}>
				{headingPrimary}
			</p>
		);
	}
	if (headingSecondary) {
		return (
			<p style={{ ...addedStyles }} className={`heading-secondary ${classname}`}>
				{headingSecondary}
			</p>
		);
	}
	if (headingTertiary) {
		return (
			<p style={{ ...addedStyles }} className={`heading-tertiary ${classname}`}>
				{headingTertiary}
			</p>
		);
	}
};

export default Topography;
