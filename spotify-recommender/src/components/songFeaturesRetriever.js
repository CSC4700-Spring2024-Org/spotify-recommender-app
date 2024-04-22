import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './songFeaturesRetriever.css';

const SpotifyAudioFeatures = ({ accessToken, trackId, result }) => {
  const [audioFeatures, setAudioFeatures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState({});

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
        // Initialize all features as not selected
        setSelectedFeatures({
          acousticness: false,
          danceability: false,
          energy: false,
          instrumentalness: false,
          key: false,
          liveness: false,
          loudness: false,
          mode: false,
          speechiness: false,
          tempo: false,
          time_signature: false,
          valence: false
        });
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

  const handleCheckboxChange = (feature) => {
    setSelectedFeatures(prevState => ({
      ...prevState,
      [feature]: !prevState[feature]
    }));
  };

  const handleSubmit = () => {
    // Convert selected features into an array of booleans
    const featuresArray = Object.values(selectedFeatures);
    console.log(featuresArray); 
  };

  if (isLoading) return <div>Loading audio features...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!audioFeatures) return null;

  return (
    <div>
      <h2>Audio Features</h2>
      {/* adding outline for html/css format */}
      <div className='audio-features-container'>
        <div className='album-cover'>album img</div>
        <div className='audio-info'>
          <div style={{fontWeight: 'bold'}}>song</div>
          <div>result.artists[0].name</div>
          <div className='audio-features'>
            {Object.keys(selectedFeatures).map((feature) => (
              <div key={feature}>
                <input
                  type="checkbox"
                  checked={selectedFeatures[feature]}
                  onChange={() => handleCheckboxChange(feature)}
                /> {feature.charAt(0).toUpperCase() + feature.slice(1)}: {audioFeatures[feature]}
              </div>
            ))}
          </div>
        </div>
        <button style={{height: 35, borderRadius: 5}} onClick={handleSubmit}>Confirm Features</button>
      </div>
      
    </div>
  );
};

export default SpotifyAudioFeatures;
