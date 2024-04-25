// get Spotify API recommendations based on trackID
async function getRecommendations(accessToken, trackId, selectedFeaturesArray) {
   //click on checkbox, search by some features. might be if and-logic then. do a dynamic list
   //switch for thw white part
  // set up API query
  //look at wireframe
  //print to console
  //only use target
  //git pull before change, git push after
  const url = "https://api.spotify.com/v1/recommendations";
  const market = "US"
  const seed_artists = ""
  const seed_genres = ""
  const seed_tracks = trackId
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



  console.log("recommender got features array", selectedFeaturesArray)

  var getUrl = url + "?seed_tracks=" + seed_tracks
  Object.entries(selectedFeaturesArray).map( ([key, value]) => {
    var stringToAdd = '&' + key + '=' + value
    console.log(stringToAdd)
    getUrl += stringToAdd
  })

  console.log("Using url", getUrl)

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

  console.log("recommendations:",info)
  return(info)
}
catch(error){
  console.error('Return error', error)
  return []
}
}

export  { getRecommendations };
