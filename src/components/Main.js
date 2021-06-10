import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import {Switch, Route} from 'react-router-dom';
import Playlists from './Playlists';
import PlaylistPage from './pages/Playlist';

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">
                <p>Hello test</p>
            </div>
            <div className="mainContent">
             <Switch>

                 <Route path='/' exact component={Categories}></Route>
                 <Route path="/search">Search</Route>
                 <Route path="/your-library">Library</Route>
                 <Route path="/playlist/:id" component={PlaylistPage} ></Route>

             </Switch>    
                </div>
            </div>
    );
}

export default Main;
