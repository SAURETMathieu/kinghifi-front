// Importing necessary React hooks and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// Importing local files
import Label from '../Label';
import fetchData from '../../services/api/call.api';

function Labels() {
  // Defining state variables
  const [labelsAlbums, setLabelsAlbums] = useState([]);

  // Getting the id parameter from the URL (using useParams hook)
  const { id } = useParams();

  // Function to fetch labels and their albums data
  const fetchLabelsAlbums = async () => {
    // If id is undefined, load all labels and albums
    if (!id) {
      const labelsData = await fetchData('GET', 'labels/albums');
      setLabelsAlbums(labelsData);
    } else {
      // else, load albums for the label with the specified id
      const labelsData = await fetchData('GET', `labels/${id}/albums`);
      setLabelsAlbums(labelsData);
    }
  };

  // useEffect hook to trigger data fetching when id changes
  useEffect(() => {
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
