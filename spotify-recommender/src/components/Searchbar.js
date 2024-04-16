import React from 'react'
import { useState } from "react";
import { search } from '../searcher.js';
import SearchResults from './SearchResults.js';

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
    <div>
        <div>
            <input id="searchInput" placeholder='Enter a song...' style={{borderRadius: 5, margin: 3, lineHeight: 1.75, border: 'none', outline: 'none', boxShadow: '0px 0px 8px gray'}} onChange={event => handleChange(document.getElementById("searchInput").value)}/>
            <button style={{borderRadius: 5, lineHeight: 1.75, border: 'none', boxShadow: '0px 0px 8px gray'}} onClick={event => search(accessToken, document.getElementById("searchInput").value)}>Search</button>
            <div style={{display: 'flex', justifyContent: 'center'}}>
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