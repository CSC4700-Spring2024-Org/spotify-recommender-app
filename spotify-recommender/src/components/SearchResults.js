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
    <div style={{width: '100%', padding: 3, display: 'flex', flexDirection: 'column', boxShadow: '0px 8px 10px gray', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
        {results.map((result, i) => (
          <div style={{padding: 3, display: 'flex', flexDirection: 'row', textAlign: 'left'}} key={i} onClick={event => handleClick(result)}>
            <div><img src={result.album.images[0].url} alt={result.album} width='75vm' height='75vm'></img></div>
            <div style={{display: 'flex', flexDirection:'column', marginLeft: 20}}>
              <div style={{fontWeight: 'bold'}}>{result.name}</div>
              <div>{result.artists[0].name}</div>
            </div>
          </div>
        ))}
        
    </div>
  )
}

export default SearchResults