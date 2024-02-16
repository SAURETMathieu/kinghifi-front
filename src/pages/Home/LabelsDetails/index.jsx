/* eslint-disable react/prop-types */

function LabelsDetails({ labelsDetails }) {
  console.log(labelsDetails);
  // TODO: remplacer Label 1 par le vrai nom
  const crews = labelsDetails.filter((label) => label.name === 'King Hi-Fi Sound System');

  const labels = labelsDetails.filter((label) => label.name !== 'King Hi-Fi Sound System');

  return (
    <>
      {
      crews.map((crew) => (
        <section className="hero" key={crew.id}>
          <img className="hero-image" src={crew.url_image} alt={crew.name} />
          <p className="title">
            {crew.name}
          </p>
          <p className="subtitle">
            { crew.year }
            { crew.description }
            { crew.country }
            { crew.city }
          </p>
        </section>
      ))
      }

      {
      labels.map((label, index) => (
        <div className={index % 2 === 0 ? 'label__card' : 'label__card is_reverse'} key={label.id}>
          <div className="label__card-header" />
          <img className="label__card-image" src={label.url_image} alt={label.name} />
          <div className="label__card-content">
            { label.year }
            { label.description }
            { label.country }
            { label.city }
          </div>
        </div>
      ))
      }
    </>
  );
}

export default LabelsDetails;
