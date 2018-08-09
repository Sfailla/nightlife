import React from 'react';

const Topography = ({ headingPrimary, headingSecondary, headingTertiary, classname, addStyles }) => {
	if (headingPrimary && classname) {
		return (
			<p style={{ ...addStyles }} className={`heading-primary ${classname}`}>
				{headingPrimary}
			</p>
		);
	} else if (headingPrimary) {
		return (
			<p style={{ ...addStyles }} className={`heading-primary`}>
				{headingPrimary}
			</p>
		);
	}
	if (headingSecondary && classname) {
		return (
			<p style={{ ...addStyles }} className={`heading-secondary ${classname}`}>
				{headingSecondary}
			</p>
		);
	} else if (headingSecondary) {
		return (
			<p style={{ ...addStyles }} className={`heading-secondary`}>
				{headingSecondary}
			</p>
		);
	}
	if (headingTertiary) {
		return (
			<p style={{ ...addStyles }} className={`heading-tertiary ${classname}`}>
				{headingTertiary}
			</p>
		);
	}
};

export default Topography;
