function search(accessToken, searchInput) {
        
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
    fetch(request, searchParameters)
      .then(response => {
        if(response.ok) {
            response.json()
        } else {
            console.log("response not good")
        }
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))

    }

  export { search };