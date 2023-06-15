import React, { useState } from 'react';

const SearchResultPage = ({ videos }) => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchQuery) => {
        const filteredVideos = videos.filter((video) =>
            video.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredVideos);
    };

    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {searchResults.map((video) => (
                    <li key={video.id}>
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultPage;
