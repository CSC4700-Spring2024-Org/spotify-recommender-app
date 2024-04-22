import './App.css';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titlebar from "./components/Titlebar.js";
import Searchbar from "./components/Searchbar.js";
import SpotifyAudioFeatures from './components/songFeaturesRetriever.js';
import { getRecommendations } from './recommender.js';

function App() {

  const CLIENT_ID = "459618efb1c940028bc3a20817de0916"
  const CLIENT_SECRET = "1c7760f078134186b654ec52d4ac0bad"

  const[accessToken, setAccessToken] = useState("");
  const[selectedTrack, setSelectedTrack] = useState("");

  const selectTrack = (trackId) => {
    setSelectedTrack(trackId)
  }

  // requests Access Token
  useEffect(() => {
    var authParameters = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
  
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
        .catch(error => console.log(error))
    }, [])   

  // render page elements
  return (
    <div className="App">
      <div className="row">
        <div className="container">
          <Titlebar />
        </div>
        <div className="container" style={{padding: 20}} >
          <Searchbar accessToken={accessToken} selectTrack={selectTrack}/>
        </div>
        <div>
        {selectedTrack ? (
              <SpotifyAudioFeatures accessToken={accessToken} trackId={selectedTrack}/>
              ) : (
                ""
              )}
        </div>
        <div><button style={{borderRadius: 5}} onClick={() => getRecommendations()}>Test Recommend</button></div>
      </div>
    </div>
    
  );
}

export default App;
