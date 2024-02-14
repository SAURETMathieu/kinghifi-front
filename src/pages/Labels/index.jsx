// import './index.css'

import { useState, useEffect } from 'react';

function Labels() {
  const [labelsAlbums, setLabelsAlbums] = useState([]);

  // recupere l'id de /labels/:id
  // si id est undefined, on charge tout, si il a une valeur
  // on charge que le label qui a l'id récupéré
  // requete api get all labels with tracks
  const fetchLabelsAlbums = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/labels/albums');
      const data = await response.json();
      setLabelsAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLabelsAlbums();
  }, []);
  console.log(labelsAlbums);
  //   0: albums:(3) [{…}, {…}, {…}]
  // city: "Berlin"
  // country: "Allemagne"
  // created_at: "2024-02-14T13:45:10.761Z"
  // description: "Description du label 2"
  // id: 2
  // name: "Label 2"
  // updated_at: null
  // url_image: "url_image_label_2"
  // year: 2010

  // map reponse, récupère l'id, path:/labels/{label.id}, label:label.name

}

export default Labels;
