/* eslint-disable react/prop-types */
// Importing styles
import './index.css';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Player from '../Player';

function Album({ oneAlbumSongs, albumId }) {
  const [trackData, setTrackData] = useState();
  // créer une const false/true, changée dans useEfect
  const handleClick = (track) => { setTrackData(track); };

  useEffect(() => {
    if (trackData) {
      console.log(trackData.name);
    }
  }, [albumId, oneAlbumSongs]);

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
                onClick={() => handleClick(track)}
              />
              <div className="track-name">
                {track.name}
              </div>
              <div className="track-duration">
                {track.duration}
              </div>

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
