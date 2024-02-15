// import './index.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Labels() {
  const [labelsAlbums, setLabelsAlbums] = useState([]);

  // On récupère l'id de l'url
  const { id } = useParams();

  const fetchLabelsAlbums = async () => {
    // si id est undefined, on charge tout, si il a une valeur
    if (id === undefined) {
      try {
        // requete api get all labels with albums
        const response = await fetch('http://localhost:4000/api/labels/albums');
        const data = await response.json();
        setLabelsAlbums(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      // on charge que le label qui a l'id récupéré
      try {
        const response = await fetch(`http://localhost:4000/api/labels/${id}/albums`);
        const data = await response.json();

        setLabelsAlbums(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchLabelsAlbums();
  }, [id]);

  console.log('état actuel:', labelsAlbums);

  return (
    labelsAlbums.map((label) => (
      <div key={label.id}>
        <div className="label-name">{label.name}</div>
        {label.albums.map((album) => (
          <div className="label-albums" key={album.id}>
            <img className="label-image" src={album.url_image} alt={album.name} />
            <p>{album.year}</p>
          </div>
        ))}

      </div>
    ))

  );
}

export default Labels;
