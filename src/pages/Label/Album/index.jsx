/* eslint-disable react/prop-types */
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import React, { useState, useEffect } from 'react';

import Player from '../Player';

function Album({ oneAlbumSongs, albumId }) {
  const [trackData, setTrackData] = useState(null);
  const [likedTracks, setLikedTracks] = useState([]);

  const handleClickPlay = (track) => { setTrackData(track); };

  const handleClickLikes = (trackId) => {
    if (likedTracks.includes(trackId)) {
      setLikedTracks(likedTracks.filter((id) => id !== trackId));
    } else {
      setLikedTracks([...likedTracks, trackId]);
    }
  };
  // console.log(likedTracks);

  useEffect(() => {
    if (trackData) {
      console.log(trackData.name);
    }
  }, [albumId, oneAlbumSongs, trackData]);

  return (
    <div className="album-container">
      <h1>
        {oneAlbumSongs[0]?.name}
      </h1>

      {oneAlbumSongs.length && oneAlbumSongs[0].tracks.length
        // true: map over the tracks array of the first album
        ? (
          oneAlbumSongs[0].tracks.map((track) => (
            <div className="track-container" key={track.id}>
              <img className="track-cover" src={track.url_image} alt={track.name} />
              <FontAwesomeIcon
                icon={faPlay}
                className="play-icon"
                onClick={() => handleClickPlay(track)}
              />
              <div className="track-name">
                {track.name}
              </div>
              <div className="track-duration">
                {track.duration}
              </div>

              <FontAwesomeIcon
                icon={likedTracks.includes(track.id) ? solidStar : regularStar}
                onClick={() => handleClickLikes(track.id)}
                className="likes-icon"
              />

            </div>
          ))
        )
        // false: tell this at the user.
        : ('Aucun sons dans cet album')}
      <Player trackData={trackData} />
    </div>
  );
}

export default Album;
