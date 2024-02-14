/* eslint-disable react/prop-types */

function LabelsDetails({ labelsDetails }) {
  // TODO: remplacer Label 1 par le vrai nom
  const crews = labelsDetails.filter((label) => label.name === 'Label 1');

  const labels = labelsDetails.filter((label) => label.name !== 'Label 1');

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
      labels.map((label) => (
        <div className="label__card" key={label.id}>
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
