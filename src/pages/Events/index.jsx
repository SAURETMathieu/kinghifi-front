/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import './index.css';

import { useState, useEffect } from 'react';

import EventsDetails from './eventsDetails';
import fetchData from '../../services/api/call.api';

function Events() {
//   const [uneVariable, setUneVariable] = useState('');
  const [eventsDetails, setEventsDetails] = useState([]);

  const fetchDetails = async () => {
    try {
      const eventsData = await fetchData('GET', 'events');
      // const data = await response.json();
      setEventsDetails(eventsData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <EventsDetails eventsDetails={eventsDetails} />
  );
}

export default Events;
