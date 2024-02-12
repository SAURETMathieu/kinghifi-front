import './index.css'

import axios from "axios"; 
import { useState, useEffect } from 'react';

import LabelsDetails from './LabelsDetails';


function Home() {

  const [labelsDetails, setLabelsDetails] = useState([]);
  
  //TODO factoriser dans /services/api/getLabels.jsx
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
    <>
        <LabelsDetails labelsDetails={labelsDetails}/>
      {/* <div className="head-container">
        <img className="head-image" src="./images/KHF BANNER.jpg"/>
      </div>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quos, similique, doloribus saepe ipsum vel, reiciendis veniam aut expedita quae neque ratione? 
      Dolores possimus iste soluta temporibus! Molestiae facere ex delectus.
      gnam cumque neque molestias, esse pariatur quisquam aspernatur. Ut, nisi.</p>

      <div className="label__card">
        <h2 className="label__card-header">Pure Niceness Records</h2>
        <div className="label__card-main">
          <img className="label__card-image" src="/images/Pure Niceness Records logo FB.jpeg"/>
          <div className="label__card-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus natus, aspernatur debitis assumenda numquam dolor ullam doloribus temporibus repellat libero, consequuntur veniam iste eligendi laboriosam ea voluptate modi ratione.
          Enim, iste optio sequi harum numquam in labore repellendus iure possimus corporis fugit, cumque corrupti aliquam quam ratione, voluptates pariatur illo earum ducimus porro aut tenetur quasi nam vero! Voluptatibus!
          , accusamus id! Debitis.
          </div>
        </div> 
      </div> */}
    </>
    
  )
}

export default Home