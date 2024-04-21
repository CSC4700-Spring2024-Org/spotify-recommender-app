import React, { useState } from 'react';
import { search } from '../searcher.js';
import SearchResults from './SearchResults.js';
import SpotifyAudioFeatures from './songFeaturesRetriever.js'; // Ensure this is correctly imported
import './Searchbar.css';

const Searchbar = ({ accessToken }) => {
    const [results, setResults] = useState([]);
    const [selectedTrackId, setSelectedTrackId] = useState(null);

    const handleSearch = async (searchInput) => {
        if (searchInput.trim() !== "") {
            const result = await search(accessToken, searchInput);
            if (result !== "ERROR") {
                setResults(result);
            }
        }
    };

    return (
        <div className='search-container'>
            <div className='search-bar-container'>
                <div className='search-bar'>
                    <input
                        id="searchInput"
                        placeholder='Enter a song...'
                        style={{ borderRadius: 5 }}
                        onChange={(event) => handleSearch(event.target.value)}
                    />
                    <button style={{ borderRadius: 5 }} onClick={() => handleSearch(document.getElementById("searchInput").value)}>Search</button>
                </div>
                {results.length > 0 && (
                    <SearchResults results={results} setSearchTrackId={setSelectedTrackId} />
                )}
            </div>
            {selectedTrackId && (
                <SpotifyAudioFeatures
                  trackId={selectedTrackId}
                  accessToken={accessToken}
              />
            )}
        </div>
    );
};

export default Searchbar;
