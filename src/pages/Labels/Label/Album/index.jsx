/* eslint-disable react/prop-types */
import './index.css';

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import fetchData from '../../../../services/api/call.api';
import Player from '../Player';

function Album({ oneAlbumSongs, setOneAlbumSongs, albumId }) {
  const [trackData, setTrackData] = useState(null);

  const handleClickPlay = (track) => { setTrackData(track); };

  const handleClickAddLikes = async (track) => {
    const likeWithSuccess = await fetchData('GET', `tracks/${track.id}/likes`, null, true);

    if (likeWithSuccess) {
      setOneAlbumSongs((prevData) => prevData?.map((album) => ({
        ...album,
        tracks: album.tracks?.map((item) => ({
          ...item,
          liked: item.id === track.id ? !track.liked : item.liked,
        })),
      })));
    } else {
      toast.error('Inscription necessaire pour avoir des titres favoris');
    }
  };

  useEffect(() => {
    if (trackData) {
      console.log(trackData.name);
    }
  }, [albumId, oneAlbumSongs, trackData]);

  return (
    <>
      <div className="album-container">
        <h1 className="album-container__title">
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
                  icon={track.liked ? solidStar : regularStar}
                  onClick={() => {
                    handleClickAddLikes(track);
                  }}
                  className="likes-icon"
                />
              </div>
            ))
          )
        // false: tell this at the user.
          : ('Aucun sons dans cet album')}

      </div>
      <div className="player-container">
        <Player trackData={trackData} />
      </div>
    </>
  );
}

export default Album;
