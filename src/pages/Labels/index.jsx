// Importing necessary React hooks and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router-dom';

// Importing local files

import Label from './Label';
import fetchData from '../../services/api/call.api';

export const musicDataLoader = async (id) => {
  if (id) {
    const labelsData = await fetchData('GET', `labels/${id}/albums`);
    return labelsData;
  } const labelsData = await fetchData('GET', 'labels/albums');
  return labelsData;
};

function Labels() {
  const { id } = useParams();

  const data = useLoaderData();

  // Defining state variables
  const [labelsAlbums, setLabelsAlbums] = useState(data);

  useEffect(() => {
    const fetchLabelsAlbums = async () => {
      const result = await musicDataLoader(id);
      setLabelsAlbums(result);
    };
    fetchLabelsAlbums();
  }, [id]);

  // Rendering the component
  return (
    <>
      {/* Rendering the Label component with labels and their albums */}
      <Label labelsWhithAlbums={labelsAlbums} />

    </>
  );
}

// Exporting the Labels component
export default Labels;
