// search Spotify API based on searchInput
async function search(accessToken, searchInput) {
        
    // set up API query
    var endpoint = "https://api.spotify.com/v1/search"
    var query = searchInput
    var type = "track"
    var request = endpoint + '?q=' + query + '&type=' + type 
    console.log("Searching for " + query)

    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    
    // send + receive API query
    var data = await fetch(request, searchParameters)
      .then(response => response.json())
      .then(data => { return data })
      .catch(error => console.log(error))

      // parse + return results of search
      var firstResult = data.tracks.items[0]
      var simplifiedResult = firstResult.name + " - " + firstResult.artists[0].name + " (" + firstResult.album.name + ")" 
      console.log(simplifiedResult)

      return simplifiedResult

    }

  export { search };