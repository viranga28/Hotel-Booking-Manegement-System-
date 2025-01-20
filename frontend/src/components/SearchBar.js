import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevents page refresh
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearchSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Search for a hotel..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
