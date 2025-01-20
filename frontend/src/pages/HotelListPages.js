import React, { useState, useEffect } from 'react';
import HotelCard from '../components/HotelCard';
import SearchBar from '../components/SearchBar';

const HotelListPage = () => {
    // State for hotels, search term, loading status, and fetch errors
    const [hotels, setHotels] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            setIsLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch('/api/hotels'); // Fetch hotels from the backend API
                if (!response.ok) {
                    // Handle HTTP errors
                    const errorData = await response.json(); // Try to get more specific error info from the server
                    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setHotels(data);
            } catch (error) {
                console.error("Error fetching hotels:", error);
                setFetchError("Failed to fetch hotels. Please try again later."); // Set a user-friendly error message
            } finally {
                setIsLoading(false); // Set loading to false after fetch completes (success or error)
            }
        };

        fetchHotels(); // Call the fetch function
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleSearch = (term) => {
        setSearchTerm(term); // Update the search term state
    };

    // Filter hotels based on the search term
    const filteredHotels = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return <div className='loading-message'>Loading Hotels...</div>; // Display loading message
    }

    if (fetchError) {
        return <div className='error-message'>{fetchError}</div>; // Display error message
    }

    return (
        <div>
            <h2>Hotels</h2>
            <SearchBar onSearch={handleSearch} /> {/* Pass the handleSearch function to the SearchBar component */}
            <div className="hotel-list">
                {/* Map through the filtered hotels and render a HotelCard component for each */}
                {filteredHotels.map(hotel => (
                    <HotelCard key={hotel._id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HotelListPage;
