import React from 'react'
import './SearchResults.css'


const SearchResults = (results) => {
  results = results.results
  console.log("search results got", results) //for some reason, this log message fixes the keysmash bug
  
  // click on a result
  const handleClick = (result) => {
    console.log("Clicked on", result.name)
    console.log("song ID =", result.id)
  }

  // render search results
  return (
    <div className='search-results-container'>
        {results.map((result, i) => (
          <div className='search-result-container' key={i} onClick={event => handleClick(result)}>
            <div><img src={result.album.images[0].url} alt={result.album} width='75vm' height='75vm'></img></div>
            <div className='search-result-info'>
              <div style={{fontWeight: 'bold'}}>{result.name}</div>
              <div>{result.artists[0].name}</div>
            </div>
          </div>
        ))}
        
    </div>
  )
}

export default SearchResults