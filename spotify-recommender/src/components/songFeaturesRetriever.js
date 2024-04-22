import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './songFeaturesRetriever.css';

const SpotifyAudioFeatures = ({ accessToken, trackId, result }) => {
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

  // Display the retrieved audio features here (e.g., using JSX)
  return (
    <div>
      <h2>Audio Features</h2>

      {/* adding outline for html/css format */}
      <div className='audio-features-container'>
        <div className='album-cover'>album cover</div>
        <div className='audio-features-info'>
          <div style={{fontWeight: 'bold'}}>song</div>
          <div>artist</div>
          <div>features go here</div>
        </div>
      </div>


      <p>Danceability: {audioFeatures.danceability}</p>
      <p>Energy: {audioFeatures.energy}</p>
      <p>Acousticness: {audioFeatures.aucousticness}</p>
      <p>Instrumentallness: {audioFeatures.instrumentalness}</p>
      <p>Key: {audioFeatures.key}</p>
      <p>Liveness: {audioFeatures.liveness}</p>
      <p>Loudness: {audioFeatures.loudness}</p>
      <p>Mode: {audioFeatures.mode}</p>
      <p>Speechiness: {audioFeatures.speechiness}</p>
      <p>Tempo: {audioFeatures.tempo}</p>
      <p>Time Signature: {audioFeatures.time_signature}</p>
      <p>Valence(postitivity): {audioFeatures.valence}</p>
      {/* Display other features as needed */}
    </div>
  );
};

export default SpotifyAudioFeatures;
