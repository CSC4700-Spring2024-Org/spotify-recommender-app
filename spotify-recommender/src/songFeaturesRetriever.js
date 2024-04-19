import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You might need to install axios: npm install axios
                          //and url: npm install url

const SpotifyAudioFeatures = ({ accessToken, trackId }) => {
  const [audioFeatures, setAudioFeatures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/audio-features/${trackId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setAudioFeatures(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (trackId) {
      fetchData();
    }
  }, [trackId, accessToken]);

  if (isLoading) return <div>Loading audio features...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!audioFeatures) return null;

  // Display the retrieved audio features here 
  return (
    <div>
      <h2>Audio Features</h2>
      <p>Danceability: {audioFeatures.danceability}</p>
      <p>Energy: {audioFeatures.energy}</p>
      {/* Display other features as needed */}
    </div>
  );
};

export default SpotifyAudioFeatures;
