/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import './index.css';

import { useState, useEffect } from 'react';

import EventsDetails from './eventsDetails';

function Events() {
//   const [uneVariable, setUneVariable] = useState('');
  const [eventsDetails, setEventsDetails] = useState([]);

  const fetchDetails = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/labels');
      const data = await response.json();
      setEventsDetails(data);
    } catch (error) {
      console.log(error);
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
