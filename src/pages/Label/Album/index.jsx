/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
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
                icon={faStar}
                //le data-prefix est bien changé, mais l'icone ne change pas ; utilisation du className
                data-prefix={likedTracks.includes(track.id) ? 'fas' : 'far'}
                className={likedTracks.includes(track.id) ? 'icon-like-on' : 'icon-like-off'}
                onClick={() => handleClickLikes(track.id)}
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
