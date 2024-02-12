/* eslint-disable react/prop-types */


function LabelsDetails ({labelsDetails}){

  console.log("Détails:",labelsDetails);
 
  // city,country,created_at,description,id,name,updated_at,url_image,year
  //ex: fetch récupère repoitems, il map et a dataRepos, et re map datarepos pour avoir repoitem avec de div et tout
  return(
    <>
      <img className='head-image' src='/images/KHF fisheye.jpg'></img>
      {
        labelsDetails.map((label) =>
          
            <div className='label__card' key={label.id}>
              <div className='label__card-header'>
                {console.log(label.name)}
              </div>
              <img className='label__card-image' src={label.url_image} alt={label.name}/>
              <div className='label__card-content'>
                { label.description }
              </div>
            </div>
          
        )
      }
    </>    
  )
}

export default LabelsDetails;