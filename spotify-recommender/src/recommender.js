// search Spotify API based on searchInput
async function getRecommendations(accessToken, searchInput) {
   //click on checkbox, search by some features. might be if and-logic then. do a dynamic list
   //switch for thw white part
  // set up API query
  //look at wireframe
  //print to console
  //only use target
  //git pull before change, git push after
  const url = "https://api.spotify.com/v1/recommendations";
  const market = "US"
  const seed_artists = searchInput;
  const seed_genres = ""
  const seed_tracks = "2QTDuJIGKUjR7E2Q6KupIh"
  const target_acousticness = "target accousticness"
  const target_danceability ="target danceability"
  const target_energy = "target energy"
  const target_duration = "target duration"
  const instrumentalness = "instrumentalness"
  const key = "key"
  const live = "live"
  const loud = "loudness"
  const mode = "modeness"
  const popularity = "popularity"
  const speechiness = "speechiness"
  const tempo = "tempo"
  const time = "time"
  const valence = "valence"
  
  const searchParameters = {
    market: "US",
    seed_artists: searchInput,
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



  //const getUrl = `${url}?${searchParameters.toString()}`
  const getUrl = url + "?seed_tracks=" + seed_tracks + "&target_instrumentalness=" + 0.5 + "&target_loudness=" + 0.5
  console.log("Using url" + getUrl)

  //target attributes, and seed track
//consol log request
const headers = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
  }
}


try{
  // const errorCatch = await fetch(getUrl, headers)
  //   if(!errorCatch.ok){
  //     throw new Error(`Error: ${getUrl.status}`)
  //   }

var info = await fetch(getUrl, headers)
  .then(response => response.json())
  .then(info => { return info })
  .catch(error => console.log(error))

  console.log(info)
for(var i = 0; i < 4; i++){
  var result = info.tracks.item[i]
  responseResults.push(result)
}
const responseResults = []

for(let i = 0; i < info.tracks.items.length && i < 4; i++){
const newItem = info.tracks.items[i]

responseResults.push(item => `${item.name} - ${item.artists[0]} - (${item.album.name}`)
console.log(responseResults)
return responseResults
}
}
catch(error){
  console.error('Return error', error)
  return []
}
}

export  { getRecommendations };
