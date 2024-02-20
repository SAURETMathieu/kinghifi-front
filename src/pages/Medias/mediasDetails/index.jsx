/* eslint-disable react/prop-types */
import { NavLink, Outlet } from 'react-router-dom';

function MediasDetails({ mediasDetails }) {
  const medias = mediasDetails.filter((media) => media.id);

  console.log(medias);
  // const filteredName = medias.map((media) => (
  //   media.socials.map((social) => (
  //     social.url.split('https://facebook.com/')
  //   ))
  // ));

  // const crewNameFiltered = filteredName.map((element) => (
  //   element[0].pop()
  // ));

  // console.log(crewNameFiltered);

  return (
    <>
      <h1 className="media_h1">
        Médias
      </h1>

      <div className="fb_containeur">
        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpure.niceness.records&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmentalstamina&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook3" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fking.hi.fi&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook2" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
      </div>

      <div className="video_up_container">
        <iframe className="video_up" width="560" height="315" src="https://www.youtube.com/embed/aUN5L2zJwlU?si=OqZJxV8nOvUHm6n9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </div>

      <div className="images_container">
        <img className="images" src="/images/Barracuda.jpg" alt="Barracuda" />
        <img className="images" src="/images/box_2.jpg" alt="" />
        <img className="images" src="/images/public.jpg" alt="" />
        <img className="images" src="/images/Stamps_purenice.jpg" alt="" />
        <img className="images" src="/images/vue_fete_zik_2014.jpg" alt="" />
        <img className="images" src="/images/Stack_Fest_Bouc.jpg" alt="" />
        <img className="images" src="/images/KHF_Goodies.jpg" alt="" />
        <img className="images" src="/images/enceintes.jpg" alt="" />
        <img className="images" src="/images/KHF_dijon.jpg" alt="" />
        <img className="images" src="/images/dj.jpg" alt="" />
        <img className="images" src="/images/KHF_fete_zik_2015.jpg" alt="" />
        <img className="images" src="/images/Roots_culture_Nicolas_Rattlehead.jpg" alt="" />
      </div>

    </>
  );
}

export default MediasDetails;
