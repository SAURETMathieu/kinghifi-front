import './index.css'

import axios from "axios"; 
import { useState, useEffect } from 'react';


function Home() {

  const [labelDetails, setLabelDetails] = useState({});
  
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/labels`);
        setLabelDetails(response.data);       

        console.log(response.data[0]);
      } catch (error) {
        console.log(error);
      } 
    };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <div className='head'>
        <img className='head-image'src='projet-15-pureniceness-records-front/pureniceness/public/KHF BANNER.jpg'></img>
          <p>{labelDetails.description}</p>
      </div>

      <div className='card'>
        <div className='card-header'>Pure Niceness Records</div>
        <div className='card-image' src='public/Pure Niceness Records logo FB.jpeg'></div>
          <div className='card-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque eveniet fugit perferendis ut ipsa excepturi? Fuga quibusdam modi dicta ullam ducimus ut. Aliquam, accusamus! Necessitatibus tempora odit magnam eos?
          </div>
      </div>

      <div className='card'>
          <div className='card-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque eveniet fugit perferendis ut ipsa excepturi? Fuga quibusdam modi dicta ullam ducimus ut. Aliquam, accusamus! Necessitatibus tempora odit magnam eos?
          </div>
        <div className='card-image' src='public/310553513_532070082261099_5345476939680996713_n.jpg'></div>
      <div className='card-header'>Mental Stamina Records</div>
      </div>
      
      </>
    
  )
}

export default Home