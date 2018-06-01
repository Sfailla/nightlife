import React from 'react';

const SearchResComponent = ({img_src, img_alt, name, location}) => (
    <div className="results__container">
        <div className="results__card">
            <div className="results__card--left">
                <img src={img_src} alt={img_alt} />
            </div>
            <div className="results__card--right">
                <h2 className="heading-secondary">{name}</h2>
                <p>{location}</p>
            </div>
        </div>
    </div>
);

export default SearchResComponent;