import React from 'react';
 
import { useArtist } from 'react-spotify-api';
 
function ExampleHooks() {
  const { data, loading, error } = useArtist('7kNqXtgeIwFtelmRjWv205');
 
  return artist ? (
    <div>
      <h1>{artist.name}</h1>
      <ul>
        {artist.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ) : null;
}
export default ExampleHooks