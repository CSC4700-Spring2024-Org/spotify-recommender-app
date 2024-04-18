import React from 'react'
import { useState } from "react";
import { search } from '../searcher.js';
import SearchResults from './SearchResults.js';
import './Searchbar.css';

const Searchbar = (accessToken) => {

    accessToken = accessToken.accessToken
    const[results, setResults] = useState("")

    // handle searchbar input changes
    const handleChange = async (value) => {
      var result = await search(accessToken, value)
      setResults(result)
    }

  // render search bar
  return (
    <div className='search-container'>
        <div className='search-bar-container'>
          <div className='search-bar'>
            <input id="searchInput" placeholder='Enter a song...' style={{borderRadius: 5}} onChange={event => handleChange(document.getElementById("searchInput").value)}/>
            <button style={{borderRadius: 5}} onClick={event => search(accessToken, document.getElementById("searchInput").value)}>Search</button>
          </div>
          <div className="search-results-container">
            {results ? (
              <SearchResults results={results} />
              ) : (
                ""
              )}
          </div>
        </div>
    </div>
  )
}

export default Searchbar