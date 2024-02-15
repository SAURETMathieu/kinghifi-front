/* eslint-disable react/prop-types */
// import './index.css'

function Label({ labelsWhithAlbums }) {
  return (
    labelsWhithAlbums.map((label) => (
      <div className="label-name" key={label.id}>
        {label.name}
        {label.albums.map((album) => (
          <div className="album" key={album.id}>
            <img className="album-image" src={album.url_image} alt={album.name} />
          </div>
        ))}
      </div>
    ))
  );
}

export default Label;
