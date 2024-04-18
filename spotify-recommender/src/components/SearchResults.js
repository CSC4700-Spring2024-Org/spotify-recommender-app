import React from 'react'



const SearchResults = (results) => {
  results = results.results
  
  // click on a result
  const handleClick = (result) => {
    console.log("Clicked on", result.name)
    console.log("song ID =", result.id)
  }

  // render search results
  return (
    <div style={{width: 243.83, padding: 3, display: 'flex', flexDirection: 'column', boxShadow: '0px 8px 10px gray', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
        {results.map((result, i) => (
          <div style={{padding: 3}} key={i} onClick={event => handleClick(result)}>{result.name + " - " + result.artists[0].name + " (" + result.album.name + ")"}</div>
        ))}
        
    </div>
  )
}

export default SearchResults