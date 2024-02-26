/* eslint-disable react/prop-types */

function MediasDetails({ mediasDetails }) {
  const medias = mediasDetails.filter((media) => media.id);

  return (
    <>
      <h1 className="media_h1">
        Médias
      </h1>

      {/* Implementation of the Facebook group page. Awaiting validation by Meta */}

      {/* <div id="fb-root" />
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v19.0&appId=1783266342176460" nonce="WsCVWgUP" />

      <div className="fb-page" data-href="https://www.facebook.com/pure.niceness.records" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pure.niceness.records" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pure.niceness.records">Pure Niceness Records</a></blockquote></div>

      <div className="fb_containeur">
        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpure.niceness.records&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmentalstamina&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook3" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fking.hi.fi&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook2" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
      </div> */}

      <div className="video_up_container">
        <iframe className="video_up" width="560" height="315" src="https://www.youtube.com/embed/aUN5L2zJwlU?si=OqZJxV8nOvUHm6n9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
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
