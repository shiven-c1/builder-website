import React from 'react';
import ContactButton from './ContactButton';
import './PropertyCard.css'; // Assuming you will create a CSS file for PropertyCard styles

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <h2 className="property-title">{property.title}</h2>
            <p className="property-description">{property.description}</p>
            <ContactButton />
        </div>
    );
};

export default PropertyCard;