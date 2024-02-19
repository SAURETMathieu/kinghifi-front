/* eslint-disable react/prop-types */
import { NavLink, Outlet } from 'react-router-dom';

function MediasDetails({ mediasDetails }) {
  const medias = mediasDetails.filter((media) => media.id);
  console.log(medias);

  return (
    <>
      <h1 className="media_h1">
        Médias
      </h1>
      <div className="fb_containeur">
        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpure.niceness.records&tabs=timeline&width=1000&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmentalstamina&tabs=timeline&width=1000&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook3" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fking.hi.fi&tabs=timeline&width=1000&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook2" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
      </div>

      {/* <div className="nav_container">

        {

        medias.map((media) => (

          <NavLink
            className="nav_bar"
            key={media.id}
          >
            {media.name}
          </NavLink>

        ))

      }
      </div> */}

      {/* <div className="video_up_container">
        <iframe className="video_up" width="560" height="315" src="https://www.youtube.com/embed/aeePeVUW6-k?si=KewAiFsY-RoOtVzD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </div> */}
      <div className="images_container">
        <img className="images" src="/images/Barracuda.jpg" alt="Barracuda" />
        <img className="images" src="/images/box_2.jpg" alt="" />
        <img className="images" src="/images/Roots_culture_Nicolas_Rattlehead.jpg" alt="" />
        <img className="images" src="/images/dj.jpg" alt="" />
        <img className="images" src="/images/KHF_fete_zik_2015.jpg" alt="" />
        <img className="images" src="/images/Stack_Fest_Bouc.jpg" alt="" />
        <img className="images" src="/images/Barracuda.jpg" alt="" />
        <img className="images" src="/images/box_2.jpg" alt="" />
        <img className="images" src="/images/Roots_culture_Nicolas_Rattlehead.jpg" alt="" />
        <img className="images" src="/images/dj.jpg" alt="" />
        <img className="images" src="/images/KHF_fete_zik_2015.jpg" alt="" />
        <img className="images" src="/images/Stack_Fest_Bouc.jpg" alt="" />
      </div>

    </>
  );
}

export default MediasDetails;
