import React from 'react';

const Topography = ({
	headingPrimary,
	primaryMessage,
	headingSecondary,
	secondaryMessage,
	headingTertiary,
	tertiaryMessage,
	clsname
}) => {
	if (headingPrimary) {
		return <p className={`heading-primary ${clsname}`}>{primaryMessage}</p>;
	}
	if (headingSecondary) {
		return <p className={`heading-secondary ${clsname}`}>{secondaryMessage}</p>;
	}
	if (headingTertiary) {
		return <p className={`heading-tertiary ${clsname}`}>{tertiaryMessage}</p>;
	}
};

export default Topography;
