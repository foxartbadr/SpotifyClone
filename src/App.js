import React,{ useEffect } from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import { SpotifyApiContext,Artist } from 'react-spotify-api'
import './App.scss';
import Playlists from './components/Playlists';







const App = () => {
  
 
  return (
  <div className="outerWrap">
      <div className="App">
        <Nav/>
        <Main/>
      </div>
      <div className="musicControls">
        <audio src='url' controls></audio>
      </div>
      <SpotifyApiContext.Provider value='BQD676Q4k9PYem4B-8Bm_IAWCQMhPXk5IKbIQnqGmIynxwcQyBPns-sRdgW6otnJsuuIH6H-JwWxW0ywHjCrC5IKez4tzw-tf-nMRpbzCG56wUVbCw-l46jB0TdlGHL9tVQGQ5RWW8a7Xai9458JFZAQ9MVRjLxuyBXO'>
      <Artist id='7kNqXtgeIwFtelmRjWv205'>
        {({ data, loading, error }) =>
          data ? (
            <div>
              <h1>{data.name}</h1>
              <ul>
                {data.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : null
        }
            </Artist>
      </SpotifyApiContext.Provider>
    </div>
  );
}

export default App;
