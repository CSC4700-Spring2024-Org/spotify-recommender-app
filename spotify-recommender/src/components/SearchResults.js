import React from 'react'

const SearchResults = (results) => {
    results = results.results
    
  return (
    <div>
        {results ? (
                  results
                ) : (
                  ""
                )}
    </div>
  )
}

export default SearchResults