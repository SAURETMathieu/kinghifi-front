import './index.css';

import { useState, useEffect } from 'react';

import fetchData from '../../services/api/call.api';
import MediasDetails from './mediasDetails';

function Medias() {
  const [mediasDetails, setMediasDetails] = useState([]);

  const fetchDetails = async () => {
    try {
      const mediasData = await fetchData('GET', 'labels/socials');
      setMediasDetails(mediasData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <MediasDetails mediasDetails={mediasDetails} />
  );
}
export default Medias;
