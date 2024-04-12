async function search(accessToken, searchInput) {
        
    // search Spotify API based on searchInput
    console.log({accessToken})
    var endpoint = "https://api.spotify.com/v1/search"
    var query = searchInput
    var type = "track"
    var request = endpoint + '?q=' + query + '&type=' + type 
    console.log("Search for " + query)
    console.log(request)

    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    var data = await fetch(request, searchParameters)
      .then(response => response.json())
      .then(data => { return data })
      .catch(error => console.log(error))

      // display results of Search
      var firstResult = data.tracks.items[0]
      var simplifiedResult = firstResult.name + " - " + firstResult.artists[0].name + " (" + firstResult.album.name + ")" 
      console.log(simplifiedResult)

      return simplifiedResult

    }

  export { search };