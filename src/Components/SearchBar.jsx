import { useState } from 'react';
import '../Components.css'
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
    };

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
                {/* Modern clean SVG Search Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
        </form>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired // Validates that onSearch is a function and is mandatory
};

export default SearchBar;