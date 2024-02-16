/* eslint-disable react/prop-types */
function MediasDetails({ mediasDetails }) {
  const medias = mediasDetails.filter((media) => media.id);

  return (
    <>
      <h1 className="media_h1">
        Médias
      </h1>
      <div className="video_up_containeur">
        <iframe className="video_up" width="560" height="315" src="https://www.youtube.com/embed/aeePeVUW6-k?si=KewAiFsY-RoOtVzD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </div>
      <div className="images_containeur">
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
