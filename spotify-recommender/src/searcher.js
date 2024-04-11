function search(accessToken, searchInput) {
        
    // search Spotify API
    console.log({accessToken})
    var endpoint = "https://api.spotify.com/v1/search"
    //var query = "hotel californ"
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
    fetch(request, searchParameters)
      .then(response => response.json())
      .then(data => console.log(data))

    }

  export { search };