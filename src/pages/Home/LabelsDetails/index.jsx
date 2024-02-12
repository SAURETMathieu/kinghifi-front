/* eslint-disable react/prop-types */

const LabelsDetails = ({labelsDetails}) => {

  console.log("Détails:",labelsDetails)
 
  // city,country,created_at,description,id,name,updated_at,url_image,year
  //ex: fetch récupère repoitems, il map et a dataRepos, et re map datarepos pour avoir repoitem avec de div et tout
     
  const dataLabel = labelsDetails.map(label => {        
      return (
          <div key={label.id}>
              <h2>{label.name}</h2>
              <p>Année : {label.year}</p>
              <p>Ville : {label.city}</p>
              <p>Pays : {label.country}</p>
              <p>Description : {label.description}</p>
              <img src={label.url_image} alt={label.name} />
          </div>
      );
  });

  console.log("label:",dataLabel)

  return(
      <>

      <img className='head-image'src='/public/KHF fisheye.jpg'></img>
         <div > {dataLabel}</div>

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
       
  );
}
  
  

   

   
   

export default LabelsDetails