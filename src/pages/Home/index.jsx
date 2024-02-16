import './index.css';

import { useState, useEffect } from 'react';

import fetchData from '../../services/api/call.api';
import LabelsDetails from './LabelsDetails';

function Home() {
  const [labelsDetails, setLabelsDetails] = useState([]);

  // TODO factoriser dans /services/api/getLabels.jsx
  const fetchDetails = async () => {
    try {
      const labelsData = await fetchData('GET', 'labels');
      setLabelsDetails(labelsData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <LabelsDetails labelsDetails={labelsDetails} />
  );
}

export default Home;
