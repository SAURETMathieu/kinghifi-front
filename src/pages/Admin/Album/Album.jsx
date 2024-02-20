import { useEffect, useState } from 'react';
import AdminTemplate from '../Template/Template';
import { options } from '../../../data/formElement.json';
import fetchData from '../../../services/api/call.api';

function AlbumAdmin() {
  const [optionsList, setOptionsList] = useState([]);

  const fetchLabels = async () => {
    try {
      const labelsData = await fetchData('GET', 'labels');
      return labelsData;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const initializeOptionsList = async () => {
    const labels = await fetchLabels();
    const list = [
      options.name,
      {
        ...options.label_id,
        options: labels,
        value: labels[0]?.id,
      },
      options.year,
      options.type,
      options.url_image,
    ];
    setOptionsList(list);
  };

  useEffect(() => {
    initializeOptionsList();
  }, []);

  return (
    <AdminTemplate route="admin/albums" title="Albums" optionsList={optionsList} />
  );
}

export default AlbumAdmin;
