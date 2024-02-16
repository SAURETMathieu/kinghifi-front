/* eslint-disable react/prop-types */
function EventsDetails({ eventsDetails }) {
  //   const [uneVariable, setUneVariable] = useState('');
  const events = eventsDetails.filter((event) => event.name);

  return (
    <>
      <h1 className="event_h1">
        Evénements
      </h1>

      {

            events.map((event, index) => (
              <div className={index % 2 === 0 ? 'event_container' : 'event_container is_active'} key={event.id}>
                <div className="img_container">
                  <img className="event_image" src="images/Barracuda.jpg" alt="Barracuda" />
                </div>
                <div className="text_containeur">
                  <h2 className="event_h2">
                    {event.name}
                  </h2>
                  <p className="event_type global_description">
                    {event.type}
                  </p>
                  <p className="event_description global_description">
                    {event.description}
                  </p>
                  <p className="event_date_debut global_description">
                    {event.starting_date}
                  </p>
                  <p className="event_date_fin global_description">
                    {event.ending_date}
                  </p>
                  <p className="event_ville global_description">
                    {event.city}
                  </p>
                  <p className="event_pays global_description">
                    {event.country}
                  </p>
                  <p className="event_lieu global_description">
                    {event.location}
                  </p>
                </div>
              </div>
            ))
        }

    </>
  );
}

export default EventsDetails;
