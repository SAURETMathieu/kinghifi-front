/* eslint-disable react/prop-types */
import './index.css';

function Label({ labelsWhithAlbums }) {
  return (
    labelsWhithAlbums.map((label) => (
      <div className="label-container">
        <div className="label-name hero" key={label.id}>
          {label.name}
        </div>
        <div className="label-albums">
          {label.albums.map((album) => (
            <div className="album" key={album.id}>
              <img className="album-image" src={album.url_image} alt={album.name} />
            </div>
          ))}
        </div>
      </div>
    ))
  );
}

export default Label;
