/* eslint-disable react/prop-types */

  

const LabelsDetails = ({...labelsDetails}) => {
console.log(labelsDetails)
    return(
        <>

        <img className='head-image'src='projet-15-pureniceness-records-front/pureniceness/public/KHF BANNER.jpg'></img>
            {labelsDetails.description}

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