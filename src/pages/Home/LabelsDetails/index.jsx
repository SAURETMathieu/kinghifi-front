/* eslint-disable react/prop-types */


function LabelsDetails ({labelsDetails}){
  
  //TODO: remplacer Label 1 par le vrai nom
  const crew = labelsDetails.filter((label)=> label.name === "Label 1")

  const labels = labelsDetails.filter((label)=> label.name !== "Label 1")

  // city,country,created_at,description,id,name,updated_at,url_image,year
return(  
    <>
      <img className='hero-image' src={ crew[0].url_image }></img>
      <section className="hero">        
        <p className="title">
          {crew[0].name}
        </p>
        <p className="subtitle">
            { crew[0].year }
            { crew[0].description }
            { crew[0].country }
            { crew[0].city }
        </p>   
      </section>    

      {

      labels.map((label) =>

        <div className='label__card' key={label.id}>
            <div className='label__card-header'>
              
            </div>
            <img className='label__card-image' src={label.url_image} alt={label.name}/>
            <div className='label__card-content'>
              { label.year }
              { label.description }
              { label.country }
              { label.city }
            </div>
          </div>
          
        )
      }
    </>    
  )
}

export default LabelsDetails;