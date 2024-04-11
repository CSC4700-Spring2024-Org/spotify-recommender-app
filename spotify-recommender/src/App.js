import './App.css';
import { search } from './searcher.js';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titlebar from "./components/Titlebar.js";

function App() {

  const CLIENT_ID = "459618efb1c940028bc3a20817de0916"
  const CLIENT_SECRET = "1c7760f078134186b654ec52d4ac0bad"

  // requests Access Token
  
  const[accessToken, setAccessToken] = useState("");

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
    })

  return (
    <div className="App">
      <div className="row">
        <div className="container">
          <Titlebar />
        </div>
        <div className="container" style={{padding: 20}} >
          <input id="searchInput" placeholder='Enter a song...'/>
          <button onClick={event => search(accessToken, document.getElementById("searchInput").value)}>Search</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
