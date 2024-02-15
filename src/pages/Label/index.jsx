/* eslint-disable react/prop-types */
// import './index.css'

function Label({ albumsData }) {
  console.log(albumsData);
  return (
    <div className="label-name">
      {albumsData.name}
      {albumsData.albums.map((album) => (
        <div className="album" key={album.id}>
          <img className="album-image" src={album.url_image} alt={album.name} />
        </div>
      ))}

    </div>
  );
}

export default Label;
