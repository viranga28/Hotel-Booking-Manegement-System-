import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Our Hotel Booking Site</h1>
            <p>Find the perfect place to stay for your next trip.</p>
            <Link to="/hotels" className="view-hotels-button">View Hotels</Link>
        </div>
    );
};

export default Home;
