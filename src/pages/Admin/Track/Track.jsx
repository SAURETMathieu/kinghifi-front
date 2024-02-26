import { useState, useEffect } from 'react';
import AdminTemplate from '../Template/Template';
import { options } from '../../../data/formElement.json';
import fetchData from '../../../services/api/call.api';

function TrackAdmin() {
  const [optionsList, setOptionsList] = useState([]);

  const fetchAlbums = async () => {
    try {
      const albumsData = await fetchData('GET', 'albums');
      return albumsData;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const initializeOptionsList = async () => {
    const albums = await fetchAlbums();
    const list = [
      options.name,
      options.year,
      {
        ...options.album_id,
        options: albums,
        defaultValue: albums[0]?.id,
      },
      options.style,
      options.url_image,
      options.url_sound,
    ];
    setOptionsList(list);
  };

  useEffect(() => {
    initializeOptionsList();
  }, []);

  return (
    <AdminTemplate
      route="admin/tracks"
      title="Sons"
      optionsList={optionsList}
    />
  );
}

export default TrackAdmin;
