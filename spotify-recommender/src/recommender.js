// search Spotify API based on searchInput
async function getRecommendations(accessToken, searchInput) {
   //click on checkbox, search by some features. might be if and-logic then. do a dynamic list
   //switch for thw white part
  // set up API query
  //look at wireframe
  //print to console
  //only use target
  //git pull before change, git push after
  var url = "https://api.spotify.com/v1/recommendations";
  var market = "US"
  var seed_artists = searchInput;
  var seed_genres = ""
  var seed_tracks = ""
  var target_acousticness = "target accousticness"
  var target_danceability ="target danceability"
  var target_energy = "target energy"
  var target_duration = "target duration"
  var instrumentalness = "instrumentalness"
  var key = "key"
  var live = "live"
  var loud = "loudness"
  var mode = "modeness"
  var popularity = "popularity"
  var speechiness = "speechiness"
  var tempo = "tempo"
  var time = "time"
  var valence = "valence"
  
  var searchParameters = {
    market: market,
    seed_artists: seed_artists,
    seed_genres: seed_genres,
    seed_tracks: seed_tracks,
    target_acousticness: target_acousticness,
    target_daceability: target_danceability,
    target_energy: target_energy,
    target_duration: target_duration,
    instrumentalness: instrumentalness,
    key: key,
    live: live,
    loud: loud,
    mode: mode,
    popularity: popularity,
    speechiness: speechiness,
    tempo: tempo,
    time: time,
    valence: valence
  }

  var getUrl = `${url}?${searchParameters.toString()}`
  console.log("Using url" + getUrl)

  //target attributes, and seed track
//consol log request
var output = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
  }
}

try{
  var errorCatch = await fetch(getUrl, output)
    if(!errorCatch.ok){
      throw new Error(`Error: ${getUrl.status}`)
    }
  


var info = await errorCatch.json()

const responseResults = []
console.log(info)

for(var i = 0; i < 4; i++){
  var result = info.tracks.items[i]
  responseResults.push(result)
}
var newResults = '${result.name} - ${result.artists[0].name} - (${result.album.name\n})';
responseResults.push(newresponseResults)
return newresponseResults
}
catch(errorCatch){
  console.errorCatch('Return error', errorCatch)
  return []
}
}
(`module.exports = {getRecommendations}`)

