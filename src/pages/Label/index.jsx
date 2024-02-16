/* eslint-disable react/prop-types */
import './index.css';

import { useState } from 'react';
import Album from '../Album';

function Label({ labelsWhithAlbums }) {
  const [oneAlbumSongs, setOneAlbumSongs] = useState([]);
  const allAlbumsSongs = labelsWhithAlbums.map((label) => label.albums);
  const handleClick = () => { setOneAlbumSongs(allAlbumsSongs.map((album) => album.name)); };

  return (
    labelsWhithAlbums.map((label) => (
      <div className="label-container" key={label.id}>
        <div className="label-name hero">
          {label.name}
        </div>
        <div className="label-albums">
          {label.albums.map((album) => (

            <div className="button-album-container" key={album.id}>
              <button
                className="button-album__image"
                type="button"
                style={{ backgroundImage: `url(${album.url_image})` }}
                aria-label={album.name}
                onClick={handleClick}
              />
              <div className="button-album__name">{album.name}</div>
            </div>
          ))}
        </div>
        <Album oneAlbumSongs={oneAlbumSongs} />
      </div>
    ))
  );
}

export default Label;
