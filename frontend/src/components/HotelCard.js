import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
    const hotelImage = hotel.images && hotel.images.length > 0 ? hotel.images[0] : "placeholder_image_url";

    return (
        <div className="hotel-card">
            <img src={hotelImage} alt={hotel.name} loading="lazy" />
            <h3>{hotel.name}</h3>
            {hotel.description && <p>{hotel.description.substring(0, 100)}...</p>}
            <p>Location: {hotel.location}</p>
            <p>Price: ${hotel.price} per night</p>
            <Link to={`/hotels/${hotel._id}`} className="view-details-link">View Details</Link>
        </div>
    );
};

export default HotelCard;
