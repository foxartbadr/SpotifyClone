import React from 'react';
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import {Link} from 'react-router-dom';

const Playlists = (props) => {

    const dataPlaylists = [
       {
           id: 101,
           category_id: 3,
           name: 'Home playlist 1',
           img:'https://i.scdn.co/image/ab67616d00001e027972a71a8bd676a54d6a564e',
           desc:'Lorem ipsum'
       }, 
       {
           id: 102,
           category_id: 3,
           name: 'Home playlist 2',
           img:'https://i.scdn.co/image/ab67706f00000002470dd505fcf08e4693db9b24',
           desc:'Lorem ipsum'
       }, 
       {
           id: 103,
           category_id: 3,
           name: 'Home playlist 3',
           img:'https://i.scdn.co/image/ab67706f000000021fe82a56134c55660b2807a1',
           desc:'Lorem ipsum'
       }, 
       {
           id: 104,
           category_id: 1,
           name: 'Focus playlist 1',
           img:'https://i.scdn.co/image/ab67616d00001e02f9a9cf32efc7fb45339e8ea7',
           desc:'Lorem ipsum'
       }, 
       {
           id: 105,
           category_id: 4,
           name: 'Sunday playlist',
           img:'https://i.scdn.co/image/ab67616d00001e028bf969a2c9a6b67c0e85c8b3',
           desc:'Lorem ipsum'
       }, 
       {
           id: 106,
           category_id: 2,
           name: 'Mood playlist 1',
           img:'https://i.scdn.co/image/d6e85a5cc1ad880a11886133663863b850e0696a',
           desc:'Lorem ipsum'
       }, 
       {
           id: 107,
           category_id: 2,
           name: 'Mood playlist 2',
           img:'https://i.scdn.co/image/ab67706c0000da845a4f8adbce1696658410f1f1',
           desc:'Lorem ipsum'
       }, 
    ]

    let matchedPlaylists = dataPlaylists.filter(
        (playlist) => playlist.category_id === props.category_id)


    return (
            <div className="cardsWrapInner">

                { matchedPlaylists.map((playlist, id) => (
                    <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/playlist/` + playlist.id}>
                        <div className="card" key={id}>
                        <div className="cardImage">
                        <img aria-hidden="false" draggable="false" loading="lazy" src={playlist.img}/>
                        </div>
                        <div className="cardContent">
                         <h3>{ playlist.name }</h3>
                            <p className="subText">{playlist.desc}</p>
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default Playlists;
