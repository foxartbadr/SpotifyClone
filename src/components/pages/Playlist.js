import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'

import '../../App.scss';

const PlaylistPage = () => {

    let {id} = useParams()

    return (
        <div className="playlistPage">
            <div className='mainInner'>
                <div className="playlistPageInfo">
                    <div className="playlistPageImage">
                        <img src="https://i.scdn.co/image/d6e85a5cc1ad880a11886133663863b850e0696a" alt="pic"/>
                    </div>
                    <div className="playlistPageContent">
                    <p className="smallText uppercase bold">Playlist</p>
                    <h1>Mood Booster</h1>
                        <p className="tagline">
                        Votre mise à jour quotidienne des titres les plus écoutés aux États-Unis actuellement.
                        </p>
                        <div className="playlistPageDesc">
                       <p className="spotify">Spotify</p>
                       <span>● 687,490 likes</span>
                       <span>● 5h 30min</span>
                       </div>
                    </div>
                </div>
                <div className="playlistPageSongs">
                  <div className="playlistButtons">
                    <span className="playIcon">
                        <PlayIcon />
                    </span>
                    <div className="icons">
                         <div className="icon iconsHeart">
                         <HeartIcon />
                         </div>
                         <div className="icon iconsDots"></div>
                    </div>
                  </div>

                    <ul className="songList">

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI"/>
                            </div>
                            <div className="songDetails">
                            <h3>Song one</h3>
                               <span>Travis Scott</span>
                            </div>
                            <div className="songTime">
                            <span>4:07</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI"/>
                            </div>
                            <div className="songDetails">
                            <h3>Song one</h3>
                               <span>Travis Scott</span>
                            </div>
                            <div className="songTime">
                            <span>4:07</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI"/>
                            </div>
                            <div className="songDetails">
                            <h3>Song one</h3>
                               <span>Travis Scott</span>
                            </div>
                            <div className="songTime">
                            <span>4:07</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI"/>
                            </div>
                            <div className="songDetails">
                            <h3>Song one</h3>
                               <span>Travis Scott</span>
                            </div>
                            <div className="songTime">
                            <span>4:07</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI"/>
                            </div>
                            <div className="songDetails">
                            <h3>Song one</h3>
                               <span className="smallText">Travis Scott</span>
                            </div>
                            <div className="songTime">
                            <span>4:07</span>
                            </div>
                        </li>

                    </ul>
                </div>
           </div>
        </div>
    );
}

export default PlaylistPage;
