// Importing necessary React hooks and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router-dom';

// Importing local files

import Label from '../Label';
import fetchData from '../../services/api/call.api';

export const musicDataLoader = async (id) => {
  const idParsed = parseInt(id, 10);
  console.log(idParsed);
  if (!idParsed) {
    const labelsData = await fetchData('GET', 'labels/albums');
    return labelsData;
  } const labelsData = await fetchData('GET', `labels/${idParsed}/albums`);

  return labelsData;
};

function Labels() {
  const { id } = useParams();

  // useEffect(() => {
  //   musicDataLoader();
  //   // Pass ID to musicDataLoader
  // }, []);

  const data = useLoaderData();
  console.log(data);
  // Defining state variables
  const [labelsAlbums, setLabelsAlbums] = useState(data);

  // Getting the id parameter from the URL (using useParams hook)

  // Function to fetch labels and their albums data
  // const fetchLabelsAlbums = async () => {
  //   // If id is undefined, load all labels and albums
  //   if (!id) {
  //     const labelsData = await fetchData('GET', 'labels/albums');
  //     setLabelsAlbums(labelsData);
  //   } else {
  //     // else, load albums for the label with the specified id
  //     const labelsData = await fetchData('GET', `labels/${id}/albums`);
  //     setLabelsAlbums(labelsData);
  //   }
  // };

  // useEffect hook to trigger data fetching when id changes
  // useEffect(() => {
  //   fetchLabelsAlbums();
  // }, [id]);

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
