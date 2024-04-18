// search Spotify API based on searchInput
async function search(accessToken, searchInput) {
     
  // set up API query
  var endpoint = "https://api.spotify.com/v1/search"
  var query = searchInput
  var type = "track"
  var request = endpoint + '?q=' + query + '&type=' + type

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
  const simplifiedResults = []
  const results = []
  for(var i=0; i < 4; i++) {
    var result = data.tracks.items[i]
    var simplifiedResult = result.name + " - " + result.artists[0].name + " (" + result.album.name + ")\n"
    simplifiedResults.push(simplifiedResult)
    results.push(result)
  }

  //return simplifiedResults
  return results

}

export { search };