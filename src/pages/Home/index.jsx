// Importing styles
import './index.css';

// Importing necessary React hooks
import { useState, useEffect } from 'react';

// Importing local files
import fetchData from '../../services/api/call.api';
import LabelsDetails from './LabelsDetails';

// Defining the Home component
function Home() {
  // Defining state variables
  const [labelsDetails, setLabelsDetails] = useState([]);

  // Function to fetch labels details
  const fetchDetails = async () => {
    try {
      // Fetching labels data from the API
      const labelsData = await fetchData('GET', 'labels');
      // Setting the fetched data to the state
      setLabelsDetails(labelsData);
    } catch (error) {
      // Logging errors to the console if any
      console.log(error);
    }
  };

  // useEffect hook to trigger data fetching when the component mounts
  useEffect(() => {
    fetchDetails();
  }, []);

  // Rendering the component
  return (
    // Rendering the LabelsDetails component and passing labelsDetails as prop
    <LabelsDetails labelsDetails={labelsDetails} />
  );
}

// Exporting the Home component
export default Home;
