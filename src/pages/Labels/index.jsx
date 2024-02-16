// import './index.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Label from '../Label';
import Album from '../Album';
import fetchData from '../../services/api/call.api';

function Labels() {
  const [labelsAlbums, setLabelsAlbums] = useState([]);

  // On récupère l'id de l'url
  const { id } = useParams();

  const fetchLabelsAlbums = async () => {
    // si id est undefined, on charge tout, si il a une valeur
    if (!id) {
      const labelsData = await fetchData('GET', 'labels/albums');
      setLabelsAlbums(labelsData);
    } else {
      // on charge que le label qui a l'id récupéré
      const labelsData = await fetchData('GET', `labels/${id}/albums`);
      setLabelsAlbums(labelsData);
    }
  };
  useEffect(() => {
    fetchLabelsAlbums();
  }, [id]);

  return (
    <>
      <Label labelsWhithAlbums={labelsAlbums} />

      {/* <Album allAlbumsSongs={allAlbumsSongs} setAllAlbumsSongs={setAllAlbumsSongs} /> */}
    </>
  );
}

export default Labels;
