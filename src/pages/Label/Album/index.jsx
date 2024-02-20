/* eslint-disable react/prop-types */
// Importing styles
import './index.css';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Player from '../Player';

function Album({ oneAlbumSongs }) {
  const [trackData, setTrackData] = useState();

  const handleClick = (track) => { setTrackData(track); };

  useEffect(() => {
    if (trackData !== null) {
      console.log(trackData);
    }
  }, [handleClick]);

  return (
    <>
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
      </div>
      <Player trackData={trackData} />
    </>
  );
}
export default Album;
