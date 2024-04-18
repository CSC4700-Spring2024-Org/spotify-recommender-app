import React from 'react'

const SearchResults = (results) => {
    results = results.results
    
  return (
    <div style={{width: 243.83, padding: 3, display: 'flex', flexDirection: 'column', boxShadow: '0px 8px 10px gray', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
        {results.map((result) => (
          <div style={{padding: 3}}>{result}</div>
        ))}
        
    </div>
  )
}

export default SearchResults