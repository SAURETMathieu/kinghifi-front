import './index.css';

import { useState, useEffect } from 'react';

import LabelsDetails from './LabelsDetails';

function Home() {
  const [labelsDetails, setLabelsDetails] = useState([]);

  // TODO factoriser dans /services/api/getLabels.jsx
  const fetchDetails = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/labels');
      const data = await response.json();
      setLabelsDetails(data);
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
