import './index.css'

import LabelsDetails from'./LabelsDetails'

import axios from "axios"; 
import { useState, useEffect } from 'react';


const Home = () => {
  
  const [labelsDetails, setLabelsDetails] = useState(null);
  
  const fetchDetails = async () => {
    try {

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/labels`);
      setLabelsDetails(response.data);
    
    } catch (error) {
      console.log(error);
    } 
    
  };

  useEffect(() => {
    fetchDetails();
  }, []);
 
  return (
    
      <div className='head'>
        <LabelsDetails labelsDetails={labelsDetails}/>
      </div>
  
  )
}

export default Home