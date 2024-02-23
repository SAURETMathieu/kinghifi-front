import { useEffect, useState } from 'react';
import AdminTemplate from '../Template/Template';
import { options } from '../../../data/formElement.json';
import fetchData from '../../../services/api/call.api';

function MediaAdmin() {
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
        defaultValue: labels[0]?.id,
      },
      options.url,
    ];
    setOptionsList(list);
  };

  useEffect(() => {
    initializeOptionsList();
  }, []);

  return (
    <AdminTemplate
      route="admin/socials"
      title="Socials"
      optionsList={optionsList}
    />
  );
}

export default MediaAdmin;
