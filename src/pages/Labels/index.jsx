// import './index.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Labels() {
  const [labelsAlbums, setLabelsAlbums] = useState([]);

  // On récupère l'id de l'url
  const { id } = useParams();
  console.log(id);

  const fetchLabelsAlbums = async () => {
    // si id est undefined, on charge tout, si il a une valeur
    if (id === undefined) {
      try {
        // requete api get all labels with albums
        const response = await fetch('http://localhost:4000/api/labels/albums');
        const data = await response.json();
        setLabelsAlbums(data);
        console.log('tous les sons:', labelsAlbums);
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   setLabelsAlbums([]);
      // }
    } else {
      // on charge que le label qui a l'id récupéré
      try {
        const response = await fetch(`http://localhost:4000/api/labels/${id}/albums`);
        const data = await response.json();

        setLabelsAlbums(data);
        console.log("sons d'un label:", labelsAlbums);
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   setLabelsAlbums([]);
      // }
    }
  };
  useEffect(() => {
    fetchLabelsAlbums();
  }, [id]);

  // map reponse, récupère l'id, path:/labels/{label.id}, label:label.name
}

export default Labels;
