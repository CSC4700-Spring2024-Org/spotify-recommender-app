import React from 'react'
import { useState } from "react";
import { search } from '../searcher.js';
import SearchResults from './SearchResults.js';
import './Searchbar.css';

const Searchbar = ({accessToken, selectTrack}) => {

    const[results, setResults] = useState("")

    const clearResults= async () => {
      setResults([])
    }

    // handle searchbar input changes
    const handleSearch = async (searchInput) => {
      if (searchInput.trim() !== "") {
        var result = await search(accessToken, searchInput)
        setResults(result)
      } else {
        clearResults()
      }
    }

  // render search bar
  return (
    <div className='search-container'>
        <div className='search-bar-container'>
          <div className='search-bar'>
            <input id="searchInput" placeholder='Enter a song...' style={{borderRadius: 5}} onChange={event => handleSearch(document.getElementById("searchInput").value)}/>
            <button style={{borderRadius: 5}} onClick={event => handleSearch(document.getElementById("searchInput").value)}>Search</button>
          </div>
            {results.length > 0 ? (
              <SearchResults results={results} selectTrack={selectTrack} clearResults={clearResults}/>
              ) : (
                ""
              )}
        </div>
    </div>
  )
}

export default Searchbar