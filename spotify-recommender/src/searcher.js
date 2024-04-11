const CLIENT_ID = "459618efb1c940028bc3a20817de0916"
const CLIENT_SECRET = "1c7760f078134186b654ec52d4ac0bad"

function search() {

    
  // requests Access Token
    var accessToken;

    var authParameters = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => console.log(data))
    }

  export { search };